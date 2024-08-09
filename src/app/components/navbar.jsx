"use client";
import React from "react";
import { useRouter } from 'next/navigation'
import { LuSearch } from "react-icons/lu";
import { GoPerson } from "react-icons/go";

import Image from "next/image";
import Link from "next/link";
const NavbarComp = () => {
  // const router = useRouter();
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  console.log(isHomePage, 'aaa')
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__flex">
          <div className="navbar__avatar">
            <Image
              src="/images/avatar.png"
              alt="avatar img"
              width={46}
              height={46}
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
                  <LuSearch />
                  <input type="text" id="search" />
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
