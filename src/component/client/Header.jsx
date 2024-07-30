"use client";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import { useState } from "react";
import Link from "next/link";
import Image from "../Image";

function Header() {
    const [toggle, setToggle] = useState(false);
    // const [dark,setDark]=useState("#181818")
    return (
        <header className="bg-[#181818] sm:h-dvh">
            <div className="flex items-center justify-between p-2">
                <a href="/" className="relative sm:h-40 sm:w-40 h-20 w-20">
                    <Image src="zj3qvjetqw4sjkrendnn" css="absolute rounded-full" alt="portfolio image" />
                </a>
                <span className="block sm:hidden" onClick={() => {
                    setToggle(current => !current)
                }}>
                    {!toggle ? <RxHamburgerMenu className="text-2xl" /> : <RxCross2 className="text-2xl" />}
                </span>
            </div>
            <nav className={toggle ? "block text-center text-xl" : "hidden sm:block sm:text-center sm:text-xl"} >
                <Link href="/" className="block py-2 border-b-[.5px]">Home</Link>
                <Link href="/about" className="block py-2 border-b-[.5px]">About</Link>
                <Link href="/skills" className="block py-2 border-b-[.5px]">Skills</Link>
                <Link href="/work" className="block py-2 border-b-[.5px]">Work</Link>
                <Link href="/contact" className="block py-2 border-b-[.5px]">Contact</Link>
                <span className="block py-2 flex justify-center gap-x-5 border-b-[.5px]">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/brown11369?tab=repositories"><FaGithub /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/barun-kumar-234162225/"><IoLogoLinkedin /></a>
                </span>
                {/* <button onClick={()=>setDark("#fff")}>dark</button> */}
            </nav>
        </header>
    )
}

export default Header;