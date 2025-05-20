import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) //!false = true
    }

    return (
        <nav className='bg-orange-500 p-4 px-10'>
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex justify-ceneter items-center '>
                    <img src="src/assets/img/logo.png" alt="Banner" className='w-20 ' />
                </div>
                <div className="md:hidden">
                    <label className="btn btn-circle swap swap-rotate bg-white">
                        <input type="checkbox" id='menu-toggle' onClick={toggleMenu} />
                        {/* Open icon */}
                        <FaBars className='swap-off fill-current text-orange-500 w-[25px] h-[25px]' />

                        {/* close icon */}
                        <FaTimes className='swap-on fill-current text-orange-500 w-[25px] h-[25px]' />
                    </label>
                </div>

                <ul className='hidden md:flex space-x-9 text-md'>
                    <li><Link to='/' className='text-white font-sans'>HOME</Link></li>
                    <li><Link to='#' className='text-white font-sans'>PRODUCT</Link></li>
                    <li><Link to='#' className='text-white font-sans'>PROMO</Link></li>
                    <li><Link to='/about' className='text-white font-sans'>ABOUT</Link></li>
                    <li><Link to='#' className='text-white font-sans'>CONTACT</Link></li>
                </ul>
            </div>

            {/* MobileMenu */}
            {isMenuOpen ? (
                <ul className='flex-col md:hidden pt-4 font-sans'>
                    <li className='py-2'><Link to='/' className='text-white font-sans'>HOME</Link></li>
                    <li className='py-2'><Link to='#' className='text-white font-sans'>PRODUCT</Link></li>
                    <li className='py-2'><Link to='#' className='text-white font-sans'>PROMO</Link></li>
                    <li className='py-2'><Link to='/about' className='text-white font-sans'>ABOUT</Link></li>
                    <li className='py-2'><Link to='#' className='text-white font-sans'>CONTACT</Link></li>
                </ul>
            ) : null}

        </nav>
    )
}
