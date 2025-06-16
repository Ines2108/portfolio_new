import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="relative py-2">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E4C7C1] to-[#401922] rounded-2xl blur-xl opacity-15 h-full w-full"></div>

      {/* Inhalt */}
      <div className="relative z-10 p-5 flex justify-center space-x-2">
        <a
          href="https://github.com/Ines2108/portfolio"
          className="text-dark opacity-50 hover:opacity-100 hover:-translate-y-2 transition duration-200 p-2"
          target="_blank"
          rel="noopener noreferrer">
          Designed & Built by Ines Niedermaier
        </a>
      </div>
    </footer>
  );
};

export default Footer;
