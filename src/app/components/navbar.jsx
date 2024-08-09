"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { LuSearch } from "react-icons/lu";
import { GoPerson } from "react-icons/go";

import Image from "next/image";
import Link from "next/link";
const NavbarComp = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground("rgba(20, 94, 42, 0.75)");
      } else {
        setNavbarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
      <div className="container">
        <div className="navbar__flex">
          <div className="navbar__avatar">
            <img
              src="/images/avatar.png"
              alt="avatar img"
             
            />
          </div>
          <div className="navbar__right">
            <ul className="navbar__list">
              <li>
                <Link href="/">Work</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
            {!isHomePage && (
              <div className="navbar__icons">
                <label htmlFor="search">
                  <input type="text" id="search" autoComplete="off"/>
                  <LuSearch />
                </label>
                <span>
                  <GoPerson />
                </span>
              </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarComp;
