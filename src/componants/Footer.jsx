import React from 'react'
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-[#333333] text-white py-4 pt-20 flex justify-center grid md:grid-cols-6 gap-0 md:gap-5 lg:gap-5 pl-10 pb-20'>
            <div className='grid col-span-3'>
                <h3 className='text-gray-300 text-xl font-sans'>Title Here</h3>
                <p className='text-gray-300 text-sm mr-20 mt-5 md:mt-5 lg:mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, nam, excepturi aliquid laborum voluptas mollitia atque ratione, voluptates explicabo sed sint nostrum! Numquam, minima nostrum. Maxime corrupti assumenda tenetur repudiandae.</p>
                <div className='flex flex-row text-2xl my-5 md:mt-5 lg:mt-0'>
                    <a href="#"><FaInstagramSquare /></a>
                    <a href="#" className='pl-2'><FaFacebookSquare /></a>
                    <a href="#" className='pl-2'><FaTwitterSquare /></a>
                    <a href="#" className='pl-2'><FaWhatsappSquare /></a>
                </div>
            </div>
            <div>
                <h3 className='text-gray-300 text-xl font-sans'>About</h3>
                <p className='text-gray-300 py-0.5 text-sm mt-5'>History</p>
                <p className='text-gray-300 py-0.5 text-sm'>Our Team</p>
                <p className='text-gray-300 py-0.5 text-sm'>Brand Guidelines</p>
                <p className='text-gray-300 py-0.5 text-sm'>Teams&Condition</p>
                <p className='text-gray-300 py-0.5 text-sm'>Privacy Policy</p>
            </div>
            <div>
                <h3 className='text-gray-300 py-0.5 text-xl font-sans'>Services</h3>
                <p className='text-gray-300 py-0.5 text-sm mt-5'>How to Order</p>
                <p className='text-gray-300 py-0.5 text-sm'>OurProduct</p>
                <p className='text-gray-300 py-0.5 text-sm'>Order Status</p>
                <p className='text-gray-300 py-0.5 text-sm'>Promo</p>
                <p className='text-gray-300 py-0.5 text-sm'>Payment Method</p>
            </div>
            <div>
                <h3 className='text-gray-300 py-0.5 text-xl font-sans'>Other</h3>
                <p className='text-gray-300 py-0.5 text-sm mt-5'>Contact Us</p>
                <p className='text-gray-300 py-0.5 text-sm'>Help</p>
                <p className='text-gray-300 py-0.5 text-sm'>Privacy</p>
            </div>

        </footer>
    )
}

export default Footer
