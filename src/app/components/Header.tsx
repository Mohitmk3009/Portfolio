// "use client";
// import React, { useState } from 'react';
// import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
// import Image from 'next/image';
// import logo from '../assets/MK.png';
// import { FiMenu, FiX } from 'react-icons/fi';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <header>
//             <Navbar 
//                 isBordered
//                 className='md:px-5 md:py-6 py-1 z-[99] bg-black border-black fixed top-0 left-0 right-0 flex justify-between items-center' // Ensure it's fixed and with high z-index
//                 shouldHideOnScroll
//             >
//                 <NavbarBrand>
//                     <Image
//                         src={logo}
//                         alt='MK'
//                         className='lg:w-[80px] w-[50px] z-99'
//                         height={60}
//                         width={70}
//                     />
//                 </NavbarBrand>

//                 {/* Desktop Menu */}
//                 <NavbarContent className="hidden sm:flex gap-14 text-xl items-center">
//                     <NavbarItem>
//                         <Link color="foreground" href="#">
//                             Home
//                         </Link>
//                     </NavbarItem>
//                     <NavbarItem isActive>
//                         <Link href="#" aria-current="page">
//                             Projects
//                         </Link>
//                     </NavbarItem>
//                     <NavbarItem>
//                         <Link color="foreground" href="#">
//                             About
//                         </Link>
//                     </NavbarItem>
//                     <NavbarItem>
//                         <Link color="foreground" href="#">
//                             Contact
//                         </Link>
//                     </NavbarItem>
//                 </NavbarContent>

//                 {/* Mobile Hamburger Icon */}
//                 <div className="sm:hidden z-99">
//                     <button onClick={toggleMenu} className="text-white">
//                         {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu (Slide Down) */}
//                 <div
//                     className={`sm:hidden fixed top-0 left-0 right-0 z-[30] bg-black text-white transition-all duration-300 ${isMenuOpen ? 'translate-y-10' : '-translate-y-full'}`} // Set high z-index for the mobile menu
//                 >
//                     <ul className="flex flex-col items-center gap-6 py-10">
//                         <li><Link href="#">Home</Link></li>
//                         <li><Link href="#">Projects</Link></li>
//                         <li><Link href="#">About</Link></li>
//                         <li><Link href="#">Contact</Link></li>
//                     </ul>
//                 </div>
//             </Navbar>
//         </header>
//     );
// };

// export default Header;


"use client";
import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Image from 'next/image';
import logo from '../assets/MK.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <Navbar 
                isBordered
                className='md:px-5 md:py-6 py-2 z-[99] bg-black border-black fixed top-0 left-0 right-0 flex justify-between items-center' // Ensure it's fixed and with high z-index
                shouldHideOnScroll
            >
                <NavbarBrand className='relative z-[50]'> {/* Adjusted z-index to keep the logo on top */}
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
                <NavbarContent className="hidden sm:flex gap-14 text-xl items-center">
  <NavbarItem>
    <Link 
      className="px-4 py-2 text-white hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 rounded-full focus:outline-none"
     href="/"
    >
      Home
    </Link>
  </NavbarItem>
  <NavbarItem>
    <Link 
      className="px-4 py-2 text-white hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 rounded-full focus:outline-none"
      href="#projects"
    >
      Projects
    </Link>
  </NavbarItem>
  <NavbarItem>
    <Link 
      className="px-4 py-2 text-white hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 rounded-full focus:outline-none"
      href="#about"
    >
      About
    </Link>
  </NavbarItem>
  <NavbarItem>
    <Link 
      className="px-4 py-2 text-white hover:bg-white hover:text-black active:bg-white active:text-black transition-all duration-300 rounded-full focus:outline-none"
      href="#contact"
    >
      Contact
    </Link>
  </NavbarItem>
</NavbarContent>


                {/* Mobile Hamburger Icon */}
                <div className="sm:hidden z-[50]"> {/* Same z-index as the logo for consistency */}
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                    </button>
                </div>

                {/* Mobile Menu (Slide Down) */}
                <div
                    className={`sm:hidden fixed top-0 left-0 right-0 z-[40] bg-black text-white transition-all duration-300 ${isMenuOpen ? 'translate-y-10' : '-translate-y-full'}`} // Lower z-index than the logo but higher than hero
                >
                    <ul className="flex flex-col items-center gap-6 py-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#projects">Projects</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
