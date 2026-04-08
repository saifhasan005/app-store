import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router';
import { FaGithub, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `font-semibold pb-[5px] ${isActive ? 'border-b border-purple-500 text-purple-700' : ''}`;

    return (
        <div className='shadow'>
            <nav className='flex items-center py-2 justify-between container mx-auto gap-4 px-4'>
                <img src={logo} alt="Logo" className='w-[40px]' />

                {/* Desktop Menu */}
                <ul className='hidden md:flex justify-between gap-4 items-center'>
                    <li><NavLink className={navLinkClass} to={'/'}>Home</NavLink></li>
                    <li><NavLink className={navLinkClass} to={'/apps'}>Apps</NavLink></li>
                    <li><NavLink className={navLinkClass} to={'/installedapps'}>Installation</NavLink></li>
                </ul>

                <button className='hidden md:flex btn btn-primary items-center gap-2'>
                    <FaGithub /> Contribute Us
                </button>

                {/* Hamburger */}
                <button
                    className='md:hidden text-xl p-1'
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaXmark /> : <FaBars />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='md:hidden px-4 pb-4 flex flex-col gap-3'>
                    <NavLink className={navLinkClass} to={'/'} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink className={navLinkClass} to={'/apps'} onClick={() => setMenuOpen(false)}>Apps</NavLink>
                    <NavLink className={navLinkClass} to={'/installedapps'} onClick={() => setMenuOpen(false)}>Installation</NavLink>
                    <button className='btn btn-primary flex items-center gap-2 w-fit'>
                        <FaGithub /> Contribute Us
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;