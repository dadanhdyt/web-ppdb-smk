"use client"
import { useState } from "react";
import LogoNavbar from "./LogoNavbar";
import MenuNavbar from "./MenuNavbar";
import MenuToggle from "./MenuToggle";
export default function Navbar() {
    const [isOpen,setIsOpen]  = useState(false);
    const OpenMenuNav = () =>{
        setIsOpen( !isOpen )
    }
    return (
        <nav className="fixed z-10 w-full bg-blue-600 shadow-lg backdrop-lg">
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    <LogoNavbar/>
                    <MenuNavbar isMenuOpen={isOpen} />
                    <MenuToggle menuOpenHandler={OpenMenuNav}/>
                </div>
            </div>
        </nav>
    )
}