import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ButtonPrimary";

function getYoutubeEmbedUrl(videoUrl) {
  try {
    const url = new URL(videoUrl);
    const idFromParam = url.searchParams.get("v");

    if (idFromParam) {
      return `https://www.youtube-nocookie.com/embed/${idFromParam}`;
    }

    const pathParts = url.pathname.split("/");
    const videoId = pathParts[pathParts.length - 1];

    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  } catch {
    return "";
  }
}

const Popup = ({ children, title, index, text, image, video }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

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
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              ref={popupRef}
              className="bg-light text-dark max-h-[80vh] overflow-y-auto p-6 sm:p-8 rounded-2xl shadow-xl max-w-xl w-[90%] text-center scrollbar-thin"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <h3 className="text-xl font-bold normal-case text-primary">
                {title}
              </h3>
              {index && (
                <span className="text-base text-primary block">{index}</span>
              )}
              <p
                className="text-base font-normal normal-case text-muted text-justify font-montserrat my-4"
                dangerouslySetInnerHTML={{ __html: text }}
              />

              {image && (
                <div className="flex justify-center flex-wrap gap-4 mb-4">
                  {Array.isArray(image) ? (
                    image.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${title} ${i + 1}`}
                        className="w-full max-w-[200px] object-contain"
                      />
                    ))
                  ) : (
                    <img
                      src={image}
                      alt={title}
                      className="w-full max-h-64 object-contain"
                    />
                  )}
                </div>
              )}

              {video && (
                <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
                  <iframe
                    src={getYoutubeEmbedUrl(video)}
                    title={title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}

              <Button
                onClick={() => setIsOpen(false)}
                text="Schließen"
                className="text-base"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Popup;
