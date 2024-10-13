"use client"
import React ,{useState}from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Image from 'next/image';
import logo from '../assets/MK.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Using react-icons for menu and cross icons

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <Navbar 
                isBordered
                className='md:px-5 md:py-6 py-2 z-50 bg-black flex justify-between items-center'
                shouldHideOnScroll
            >
                <NavbarBrand>
                    <Image
                        src={logo}
                        alt='MK'
                        className='lg:w-[80px] w-[50px] z-50'
                        height={60}
                        width={70}
                    />
                </NavbarBrand>

                {/* Desktop Menu */}
                <NavbarContent className="hidden sm:flex gap-14 text-xl items-center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Projects
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Mobile Hamburger Icon */}
                <div className="sm:hidden z-50">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                    </button>
                </div>

                {/* Mobile Menu (Slide Down) */}
                <div
                    className={`sm:hidden fixed top-0 left-0 right-0 z-30 bg-black text-white transition-all duration-300 ${isMenuOpen ? 'translate-y-10' : '-translate-y-full'}`}
                >
                    <ul className="flex flex-col items-center gap-6 z-40 py-10">
                        <li className='z-40'><Link href="#">Home</Link></li>
                        <li className='z-40'><Link href="#">Projects</Link></li>
                        <li className='z-40'><Link href="#">About</Link></li>
                        <li className='z-40'><Link href="#">Contact</Link></li>
                    </ul>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
