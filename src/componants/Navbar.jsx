import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-blue-500 p-4'>
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex justify-ceneter items-center'>
                    <img src="src/assets/img/cutlery.png" alt="Banner" className='w-12 ' />
                    <a href='#' className='text-white text-2xl font-semibold pl-4'>FoodDelish</a>
                </div>
                <ul className='flex space-x-4'>
                    <li><a href='#' className='text-white'>Home</a></li>
                    <li><a href='#' className='text-white'>About</a></li>
                    <li><a href='#' className='text-white'>Service</a></li>
                    <li><a href='#' className='text-white'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
