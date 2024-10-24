"use client";
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Image from 'next/image';
import logo from '../assets/MK.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <Navbar 
                isBordered
                className='md:px-5 md:py-6 py-2 z-[99] bg-black border-black fixed top-0 left-0 right-0 flex justify-between items-center'
                shouldHideOnScroll
            >
                <NavbarBrand className='relative z-[50]'>
                   <Link href="/">
                        <Image
                            src={logo}
                            alt='MK Logo'
                            className='lg:w-[80px] w-[50px]'
                            height={60}
                            width={70}
                        />
                    </Link>
                </NavbarBrand>

                {/* Desktop Menu */}
                <NavbarContent className="hidden sm:flex gap-10 text-xl items-center">
                    <NavbarItem>
                        <Link className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full" href="/">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full" href="#projects">
                            Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full" href="#skills">
                            Skills
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full" href="#about">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full" href="#contactme">
                            Contact Me
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className="px-4 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full" href="#socials">
                            Socials
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Large Mobile Hamburger Icon */}
                <div className="sm:hidden z-[50] relative">
                    <button 
                        onClick={toggleMenu} 
                        className={`relative w-10 h-10 flex-col flex gap-[5px] items-center justify-center focus:outline-none transition-all duration-500 ease-in-out ${isMenuOpen ? 'open' : ''}`}
                    >
                        {/* Hamburger Bars */}
                        <span className={`block w-7 h-[2px] bg-white rounded-full transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0'}`}></span>
                        <span className={`block w-7 h-[2px] bg-white rounded-full transform transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-7 h-[2px] bg-white rounded-full transform transition-transform duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'}`}></span>
                    </button>
                </div>

                {/* Mobile Menu (Slide Down) */}
                <div
                    className={`sm:hidden fixed top-0 left-0 right-0 z-[40] bg-black text-white transition-transform duration-300 ${isMenuOpen ? 'translate-y-12' : '-translate-y-full'}`}
                >
                    <ul className="flex flex-col items-center gap-4 py-5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#projects">Projects</Link></li>
                        <li><Link href="#skills">Skills</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                        <li><Link href="#socials">Socials</Link></li>
                    </ul>
                </div>
               
            </Navbar>
        </header>
    );
};

export default Header;
