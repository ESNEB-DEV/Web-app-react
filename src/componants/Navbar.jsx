import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) //!false = true
    }

    return (
        <nav className='bg-blue-500 p-4'>
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex justify-ceneter items-center'>
                    <img src="src/assets/img/cutlery.png" alt="Banner" className='w-12 ' />
                    <a href='#' className='text-white text-2xl font-semibold pl-4'>FoodDelish</a>
                </div>
                <div className="md:hidden">
                    <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
                        <svg fill='none' stroke='currentColor' strokeLinecap="rounded" strokeLinejoin="rounded" strokeWidth="2" viewBox='0 0 24 24' className='w-6 h-6' >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <ul className='hidden md:flex space-x-4'>
                    <li><Link to='/' className='text-white'>Home</Link></li>
                    <li><Link to='/about' className='text-white'>About</Link></li>  
                    <li><Link to='#' className='text-white'>Service</Link></li>
                    <li><Link to='#' className='text-white'>Contact</Link></li>
                </ul>
            </div>

            {/* MobileMenu */}
            {isMenuOpen ? (
                <ul className='flex-col md:hidden'>
                    <li className='py-2'><Link to='/' className='text-white'>Home</Link></li>
                    <li className='py-2'><Link to='/about' className='text-white'>About</Link></li>
                    <li className='py-2'><Link to='#' className='text-white'>Service</Link></li>
                    <li className='py-2'><Link to='#' className='text-white'>Contact</Link></li>
                </ul>
            ) : null}

        </nav>
    )
}
