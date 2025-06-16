import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 min-h-screen bg-light px-8 xxl:px-32 xl:px-24 lg:px-16 md:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
