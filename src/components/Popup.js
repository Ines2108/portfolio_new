import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ButtonPrimary";

const Popup = ({ children, title, text, image, video }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  // Klick außerhalb schließt Popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer z-10 inline-block">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-dark/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Content */}
            <motion.div
              ref={popupRef}
              className="fixed top-[30%] left-[38%] -translate-x-1/2 -translate-y-1/2 bg-light text-dark p-8 rounded-2xl shadow-xl z-50 max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-bold text-primary">{title}</h3>
              <p className="text-base text-muted">{text}</p>

              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full max-h-64 object-contain rounded-lg mx-auto"
                />
              )}

              {video && (
                <div className="aspect-video w-full max-w-full rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${
                      video.split("v=")[1]
                    }`}
                    title={title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}

              <div className="w-full text-base flex justify-center py-8">
                <Button onClick={() => setIsOpen(false)} text="Schließen" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Popup;
