import React, { useEffect, useRef } from "react";
import Link from "next/link";
import anime from "animejs";

const Logo = () => {
  const pathRef = useRef(null);
  const primaryPathsRef = useRef([]);

  useEffect(() => {
    // Rahmen von Anfang an sichtbar
    anime.set(pathRef.current, {
      strokeDashoffset: 0,
    });
  }, []);

  const handleMouseEnter = () => {
    // Zeichne den Rahmen neu beim Hover
    anime({
      targets: pathRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1000,
    });

    // Ändere nur die Füllfarbe der Logo-Pfade
    anime({
      targets: primaryPathsRef.current,
      fill: "#1F2125",
      stroke: "#1F2125",
      duration: 500,
      easing: "easeInOutSine",
    });

    // Ändere nur die Rahmenfarbe
    anime({
      targets: pathRef.current,
      stroke: "#1F2125",
      duration: 500,
      easing: "easeInOutSine",
    });
  };

  const handleMouseLeave = () => {
    // Setze nur die Füllfarbe der Logo-Pfade zurück
    anime({
      targets: primaryPathsRef.current,
      fill: "#F85654",
      stroke: "#F85654",
      duration: 500,
      easing: "easeInOutSine",
    });

    // Setze nur die Rahmenfarbe zurück
    anime({
      targets: pathRef.current,
      stroke: "#F85654",
      duration: 500,
      easing: "easeInOutSine",
    });
  };

  return (
    <div className="flex items-center justify-center">
      <Link href="/">
        <svg
          width="40"
          height="40"
          viewBox="0 0 109 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {/* Logo-Pfade mit Füllung */}
          <path
            ref={(el) => (primaryPathsRef.current[0] = el)}
            d="M31.3814 99.1014L25.185 11.1853C25.185 10.6004 25.6751 10.1265 26.2798 10.1265H33.3303C34.0955 10.1265 34.6229 10.8638 34.3563 11.5567L17.0569 41.4091C16.9852 41.5948 16.925 42.3237 16.9652 42.5178L29.2118 99.3093C29.4697 100.565 31.3814 100.382 31.3814 99.1014Z"
            fill="#F85654"
          />
          <path
            ref={(el) => (primaryPathsRef.current[1] = el)}
            d="M79.3418 100.03C77.2869 100.03 75.9742 98.8687 74.9969 97.3885C74.9511 97.322 74.9138 97.2499 74.8794 97.1751L59.0502 62.1339C58.5573 61.0446 56.9465 61.0807 56.508 62.1922L39.3863 99.3149C39.1828 99.8305 38.6726 100.171 38.1023 100.171H35.8008C35.0413 100.171 34.428 99.5755 34.428 98.8437L36.9817 11.5679C36.9817 11.5624 36.9817 11.5596 36.9817 11.5541C37.1278 10.0102 36.9501 10.1626 37.9103 10.1044C38.2656 10.0822 38.5924 10.0628 38.8761 10.3649C39.905 11.4598 59.2881 52.9537 60.4775 55.0437C60.5004 55.0825 60.5176 55.1157 60.5348 55.1545L74.61 86.4898C75.4927 88.4578 71.079 48.0975 71.5376 45.9993L71.8529 44.7824C72.0764 43.7652 90.8146 35.131 91.8923 35.131C93.3282 35.131 94.4058 36.4005 94.1249 37.7642C94.1249 37.7642 84.6727 88.71 80.8637 98.9324C80.4309 100.088 79.5912 100.03 79.3418 100.03Z"
            fill="#F85654"
          />
          {/* Rahmen bleibt immer sichtbar */}
          <path
            ref={pathRef}
            d="M1.91843 68.3372V1.79175H107.721V106.303H27.9737"
            fill="none"
            stroke="#F85654"
            strokeWidth="5"
            strokeMiterlimit="10"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
