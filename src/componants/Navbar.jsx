import React, { useState } from 'react'

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
                        <svg fill='none' stroke='currentColor' stroke-linecap="rounded" stroke-linejoin="rounded" stroke-width="2" viewBox='0 0 24 24' className='w-6 h-6' >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <ul className='hidden md:flex space-x-4'>
                    <li><a href='#' className='text-white'>Home</a></li>
                    <li><a href='#' className='text-white'>About</a></li>
                    <li><a href='#' className='text-white'>Service</a></li>
                    <li><a href='#' className='text-white'>Contact</a></li>
                </ul>
            </div>

            {/* MobileMenu */}
            {isMenuOpen ? (
                <ul className='flex-col md:hidden'>
                    <li className='py-2'><a href='#' className='text-white'>Home</a></li>
                    <li className='py-2'><a href='#' className='text-white'>About</a></li>
                    <li className='py-2'><a href='#' className='text-white'>Service</a></li>
                    <li className='py-2'><a href='#' className='text-white'>Contact</a></li>
                </ul>
            ) : null}

        </nav>
    )
}
