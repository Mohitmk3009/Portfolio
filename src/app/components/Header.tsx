import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, } from "@nextui-org/react";


const Header = () => {
    return (

        <Navbar shouldHideOnScroll className='md:px-5 md:py-5  py-2 bg-black flex justify-between  '>
            <NavbarBrand>
                <p className="font-black opacity-90 h1 md:text-2xl text-lg rounded-full uppercase">Mohit Kumar</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-14 text-xl  items-center" >
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

        </Navbar>
    )
}

export default Header
