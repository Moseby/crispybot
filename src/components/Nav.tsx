"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Bebas_Neue } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const Bebas = Bebas_Neue({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
  })

// Icons import
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const TOP_OFFSET = 1000;
  const [showBackground, setShowBackground] = useState(false);
  const pathname = usePathname();
  const navbarStyle = pathname === "/" ? "bg-transparent" : "bg-[#21232f]";

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${navbarStyle} ${""}`}>
      <div
        className={`absolute inset-0 bg-[#21232f] bg-opacity-80 transition-all transform duration-300 ${
          showBackground ? "visible" : "invisible"
        }`}
      ></div>
      <div className="mx-auto z-10 flex justify-betwen tracking-wider items-center h-full">
        <div className="w-full">
            <div className="hidden md:flex justify-center py-8">
            <Link href="/">
              <Image
                src="/img/crispylogo.png"
                alt="Logga meny"
                width="230"
                height="125"
                className="cursor-pointer"
              />
            </Link></div>
          <div className="flex justify-between items-center py-2 w-full bg-[#222b3c] px-8 md:px-0">
          <div className="flex md:hidden py-8">
            <Link href="/">
              <Image
                src="/img/crispylogo.png"
                alt="Logga meny"
                width="150"
                height="75"
                className="cursor-pointer"
              />
            </Link></div>
            <div className="flex md:items-center md:mx-auto font-mono font-bold">
              <ul className="hidden md:flex text-white transition duration-500">
                <a href="/">
                  <li className="uppercase text-xl border-b-2 border-transparent hover:border-b-2 hover:text-[#cac492] transition duration-500">
                    <p className={Bebas.className}>Home</p>
                  </li>
                </a>
                <a href="/scripts">
                  <li className="ml-10 uppercase text-xl border-b-2 border-transparent hover:border-b-2 hover:text-[#cac492] transition duration-500">
                  <p className={Bebas.className}>Scripts</p>
                  </li>
                </a>
                <a href="/faq">
                  <li className="ml-10 uppercase text-xl border-b-2 border-transparent hover:border-b-2 hover:text-[#cac492] transition duration-500">
                  <p className={Bebas.className}>Faq</p>
                  </li>
                </a>
                <a href="/#kontakt">
                  <li className="ml-10 uppercase text-xl border-b-2 border-transparent hover:border-b-2 hover:text-[#cac492] transition duration-500">
                  <p className={Bebas.className}>Contact</p>
                  </li>
                </a>
              </ul>
              <div
                onClick={handleNav}
                className="md:hidden hover:cursor-pointer bg-transparent rounded-sm text-white p-2"
              >
                <AiOutlineMenu size={25} />
              </div>
            </div>
          </div>

          <div
            className={
              nav
                ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#222b3c] p-10 ease-in duration-300"
                  : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-300"
              }
            >
              <div>
                <div className="flex w-full items-center justify-between ">
                  <Link href="/">
                    <Image
                      src="/img/crispylogo.png"
                      width="150"
                      height="75"
                      alt="Logga meny mobil"
                    />
                  </Link>

                  <div
                    onClick={handleNav}
                    className="text-white cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div className="py-6 pl-2 flex-col text-white text-xl tracking-wider">
                <ul>
                  <a href="./#hem" onClick={handleNav}>
                    <li className="text-md hover:text-[#7381c2] py-4">Home</li>
                  </a>
                  <a href="./#tjanster" onClick={handleNav}>
                    <li className="text-md hover:text-[#7381c2] py-4">
                      Scripts
                    </li>
                  </a>
                  <a href="./#kunder" onClick={handleNav}>
                    <li className="text-md hover:text-[#7381c2] py-4">
                      FAQ
                    </li>
                  </a>
                  <a href="./#hem" onClick={handleNav}>
                    <li className="text-md hover:text-[#7381c2] py-4">
                      Contact
                    </li>
                  </a>
                </ul>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;