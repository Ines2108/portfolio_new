import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

const images = [
  {
    src: "/images/aboutMe/Ines_in_Australien.JPG",
    alt: "Ines in Australien bei einem Abenteuer",
  },
  {
    src: "/images/aboutMe/Ines_mit_Katzen.jpg",
    alt: "Ines mit ihren zwei Katzen",
  },
  {
    src: "/images/aboutMe/Ines_laessig.jpg",
    alt: "Ines ganz laessig",
  },
  {
    src: "/images/aboutMe/Ines_Tennis.jpg",
    alt: "Ines beim Tennisspielen",
  },
  {
    src: "/images/aboutMe/Ines_wandern.jpg",
    alt: "Ines beim Wandern in den Bergen",
  },
];

const positionsSmall = [
  { top: "0px", left: "20px", rotate: -15 },
  { top: "20px", left: "80px", rotate: 10 },
  { top: "10px", left: "150px", rotate: -8 },
  { top: "100px", left: "40px", rotate: 12 },
  { top: "110px", left: "120px", rotate: -10 },
];

const positionsLarge = [
  { top: "0px", left: "0px", rotate: -15 },
  { top: "10px", left: "120px", rotate: 10 },
  { top: "-10px", left: "250px", rotate: -8 },
  { top: "150px", left: "40px", rotate: 12 },
  { top: "140px", left: "200px", rotate: -10 },
];

const PolaroidImages = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const renderImages = (positions) =>
    images.map((img, index) => (
      <motion.div
        key={index}
        className={`absolute 
  w-[40vw] xs:w-[35vw] sm:w-[30vw] md:w-[22vw] lg:w-[200px] 
  h-[60vw] xs:h-[52vw] sm:h-[44vw] md:h-[33vw] lg:h-[300px] 
  bg-white px-2 xs:px-2.5 sm:px-3 pt-3 pb-6 shadow-lg cursor-pointer transition-all
  ${index === selectedImage ? "z-50" : "z-10"}`}
        onClick={() => setSelectedImage(index === selectedImage ? null : index)}
        initial={{ scale: 1, rotate: positions[index].rotate }}
        animate={{
          scale: index === selectedImage ? 1.3 : 1,
          rotate: index === selectedImage ? 0 : positions[index].rotate,
          zIndex: index === selectedImage ? 50 : 10,
          top: index === selectedImage ? "50%" : positions[index].top,
          left: index === selectedImage ? "50%" : positions[index].left,
          x: index === selectedImage ? "-50%" : 0,
          y: index === selectedImage ? "-50%" : 0,
        }}
        transition={{ type: "spring", stiffness: 200 }}>
        <Image
          src={img.src}
          alt={img.alt}
          width={200}
          height={250}
          className={`transition-all duration-500 
            ${index === selectedImage ? "filter-none" : "filter grayscale"}`}
        />
      </motion.div>
    ));

  return (
    <>
      {/* Mobile Version */}
      <div className="relative xs:hidden mt-12 w-[90vw] max-w-[400px] h-[70vw] max-h-[500px]">
        {renderImages(positionsSmall)}
      </div>

      {/* Desktop Version */}
      <div className="relative hidden xs:block mt-12 w-[90vw] max-w-[400px] h-[70vw] max-h-[500px]">
        {renderImages(positionsLarge)}
      </div>
    </>
  );
};

export default PolaroidImages;
