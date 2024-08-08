import React from "react";
import { FaBeer } from 'react-icons/fa';
import { LuSearch } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
const NavbarComp = () => {
    return (
        <nav className="navbar">
            <div className="navbar__flex">
                <div className="navbar__avatar">
                    <Image src="/images/avatar.png" alt="avatar img" width={46} height={46} />
                </div>
                <ul className="navbar__list">
                    <li>
                        <Link href='/'>Work</Link>
                    </li>
                    <li>
                        <Link href='/'>About</Link>
                    </li>
                    <li>
                        <Link href='/'>Blog</Link>
                    </li>
                </ul>
                <div className="navbar__icons">
                    <label htmlFor="search">
                        <LuSearch />
                        <input type="text" id="search" />
                    </label>
                    <span>
                        <GoPerson />
                    </span>
                </div>
            </div>
        </nav>
    )
}
export default NavbarComp;