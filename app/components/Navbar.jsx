"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src="/header.png"
          alt="Header background"
          className="w-full"
          width={800}
          height={200}
        />
      </div>

      <nav
        className={`flex items-center justify-between h-16 px-5 lg:px-8 xl:px-[8%] z-50 w-full fixed ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadwo-sm" : ""
        }`}
      >
        <div className="flex items-center cursor-pointer mr-14">
          <a href="#top" className="text-2xl">
            Ali.dev
          </a>
        </div>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/85 shadow-xs`}
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
          {/* <button>
            <Image
              src={"/moon_icon.png"}
              alt="Toggle Dark Mode"
              className="w-6"
              width={50}
              height={10}
            />
            <ThemeToggle />
          </button> */}
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            Contact
            <Image
              src="/arrow-icon.png"
              alt="arrow"
              width={12}
              height={12}
              className="w-3"
            />
          </Link>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image
              src="/menu-black.png"
              alt=""
              className="w-6"
              width={50}
              height={10}
            />
          </button>
        </div>

        {/* - - - - - {Det här är för mobile-menu} - - - -- - - - -  - --  */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src="/close-black.png"
              alt=""
              width={50}
              height={0}
              className="w-5 cursor-pointer"
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
