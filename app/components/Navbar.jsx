"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src="/header.png"
          alt="Header background"
          className="w-full"
          width={800}
          height={200}
        />
      </div> */}

      <nav
        className={`flex items-center justify-between h-16 px-5 lg:px-8 xl:px-[8%] z-50 w-full fixed transition-colors duration-300 ${
          isScroll ? "bg-white/50 dark:bg-gray-950/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <div className="flex items-center cursor-pointer mr-14">
          <a href="#top" className="text-2xl font-bold dark:text-white">
            Ali.dev
          </a>
        </div>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-xs transition-colors duration-300 ${isScroll ? "bg-white/85 dark:bg-gray-900/85" : "bg-white/85 dark:bg-gray-900/85"}`}
        >
          <li>
            <Link href="#top">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#skills">Tech</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#contact">Contact me</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="cursor-pointer transition-transform hover:scale-110"
            >
              <Image
                src={resolvedTheme === "dark" ? "/sun_icon.png" : "/moon_icon.png"}
                alt="Toggle Theme"
                className="w-6 dark:brightness-0 dark:invert"
                width={50}
                height={50}
              />
            </button>
          )}
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 transition-colors dark:border-gray-500 dark:hover:bg-gray-800"
          >
            Contact
            <Image
              src="/arrow-icon.png"
              alt="arrow"
              width={12}
              height={12}
              className="w-3 dark:invert"
            />
          </Link>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image
              src="/menu-black.png"
              alt=""
              className="w-6 dark:invert"
              width={50}
              height={50}
            />
          </button>
        </div>

        {/* - - - - - {Det här är för mobile-menu} - - - -- - - - -  - --  */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-900 transition-all duration-500 shadow-2xl"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src="/close-black.png"
              alt=""
              width={50}
              height={50}
              className="w-5 cursor-pointer dark:invert"
            />
          </div>

          <li className="font-ovo">
            <Link onClick={closeMenu} href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="#skills">
              Tech
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} href="#contact">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
