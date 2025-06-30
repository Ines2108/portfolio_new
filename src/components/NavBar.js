import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { EmailIcon, GithubIcon, LinkedInIcon } from "./Icons";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Logo = dynamic(() => import("@/components/Logo"), {
  ssr: false,
});
const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  const isActive =
    router.asPath === href || router.asPath.startsWith(`${href}/`);

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 
      ${isActive ? "w-full" : "w-0"}`}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group my-2`}
      onClick={handleClick}>
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 
      ${router.asPath === href ? "w-full" : "w-0"}`}>
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-8 xxl:px-32 xl:px-24 lg:px-16 md:px-12 py-10 font-medium flex items-center justify-between relative">
      <button
        className="flex flex-col justify-center items-center lg:hidden"
        onClick={handleClick}>
        <span
          className={`bg-primary block transition-all duration-300 h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } `}></span>
        <span
          className={`bg-primary block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}></span>
        <span
          className={`bg-primary block transition-all duration-300 h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}></span>
      </button>

      <div className="w-full hidden justify-between items-center lg:flex">
        <nav className="text-primary font-normal">
          <CustomLink
            href="/"
            title="Home"
            className="mr-4"
            toggle={handleClick}
          />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4"
            toggle={handleClick}
          />
          <CustomLink
            href="/projekte"
            title="Projekte"
            className="ml-4"
            toggle={handleClick}
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap gap-4">
          <a href="https://github.com/Ines2108" target={"_blank"}>
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ines-niedermaier-48466a211/"
            target={"_blank"}>
            <LinkedInIcon />
          </a>
          <a
            href="mailto:ines.niedermaier@gmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <EmailIcon />
          </a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] justify-between z-30 items-center lg:hidden flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 rounded-lg backdrop-blur-md py-32">
          <nav className="text-primary font-normal flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projekte"
              title="Projekte"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap gap-4 mt-4">
            <a href="https://github.com/Ines2108" target={"_blank"}>
              <GithubIcon />
            </a>
            <a
              href="hhttps://www.linkedin.com/in/ines-niedermaier-48466a211/"
              target={"_blank"}>
              <LinkedInIcon />
            </a>
            <a
              href="mailto:ines.niedermaier@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
