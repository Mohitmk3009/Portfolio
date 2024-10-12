import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";


const Header = () => {
    return (

        <Navbar shouldHideOnScroll className='px-10 py-5 bg-black flex justify-end  '>
            <NavbarBrand>
                <p className="font-black opacity-90 h1 text-3xl ml-[-1400px] rounded-full ">Mohit Kumar</p>
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
