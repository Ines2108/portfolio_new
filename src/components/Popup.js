// components/Popup.js
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ children, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  // Klick außerhalb schließt das Popup
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
      {/* Trigger */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer z-10">
        {children}
      </div>

      {/* Popup Modal */}
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
              className="fixed top-[40%] left-[40%] -translate-x-1/2 -translate-y-1/2 bg-light text-dark p-8 rounded-2xl shadow-xl z-50 max-w-sm text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <p className="text-lg">{text}</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secundary transition">
                Schließen
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Popup;
