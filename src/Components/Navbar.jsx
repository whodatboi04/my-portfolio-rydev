import React, { useState, useEffect } from 'react'
import { HashLink as NavLink } from 'react-router-hash-link'
import { FaBars, FaTimes} from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import mobileHeaderLogo from '../Image/infinity.png'
import desktopHeaderLogo from '../Image/infinityrydev-high-resolution-logo-transparent.png'

//Navigation anchor tag
const NavLinks = () => {
    const [mode, setMode] = useState(() =>{
        const savedMode = localStorage.getItem('dark');
        return savedMode === 'true';
    });

    useEffect(() => {
        if(mode){
            document.documentElement.classList.add("dark");
            localStorage.setItem('dark', mode);
        }else{
            document.documentElement.classList.remove("dark");
            localStorage.removeItem('dark', mode);
        }

      
    }, [mode]);

    const handleClick = () =>{
        setMode(mode === false ? true : false);
    }

    return (
    <div className='flex absolute w-full gap-12 flex-col text-center items-center lg:relative lg:flex-row bg-tWhite dark:bg-dark dark:text-white'>
        <NavLink to="#Home" smooth className='hover:text-mainColor hover:border-b-2 hover:border-mainColor transition ease-in-out delay-150'>HOME</NavLink>
        <NavLink to="#aboutMe" smooth className='hover:text-mainColor hover:border-b-2 hover:border-mainColor transition ease-in-out delay-150'>ABOUT ME</NavLink>
        <NavLink to="#project" smooth className='hover:text-mainColor hover:border-b-2 hover:border-mainColor transition ease-in-out delay-150'>PROJECT</NavLink>
        <NavLink to="#experience" smooth className='hover:text-mainColor hover:border-b-2 hover:border-mainColor transition ease-in-out delay-150'>EXPERIENCE</NavLink>
        <NavLink to="#contact" smooth className='hover:text-mainColor hover:border-b-2 hover:border-mainColor transition ease-in-out delay-150'>CONTACT</NavLink>
        <button onClick={handleClick}>{mode ? <MdLightMode /> : <MdOutlineDarkMode /> }</button>
    </div>
    );
};

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggledMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
    <header className='flex flex-wrap justify-center w-full dark:bg-dark'>
        <nav className='flex  h-24 items-center justify-between w-3/4 z-10 p-5'>
            <NavLink to="/">
                <img 
                    src={desktopHeaderLogo}
                    className='hidden md:flex w-64'
                    alt='Desktop Logo'
                />
                <img 
                    src={mobileHeaderLogo}
                    className='md:hidden w-20'
                    alt='Mobile Logo'
                />
            </NavLink>
            <div className='hidden lg:flex '>
                <NavLinks />
            </div>
            <div className='lg:hidden'>
                <button onClick={toggledMenu}>{isOpen ? <FaTimes size={20} className='dark:text-white'/> : <FaBars size={20} className='dark:text-white'/>}</button>
            </div> 
        </nav>

        {isOpen && (
            <div className='flex flex-col w-full items-center gap-4 lg:hidden py-6'>
                <NavLinks />
            </div>
        )}
    </header> 
  )
}

export default Navbar
