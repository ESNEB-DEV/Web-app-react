import React from 'react'
import Navbar from './componants/Navbar'

function About() {
    return (
        <section className='bg-gray-100'>
            <Navbar />
            <div className="contrainer mx-auto text-center py-16 pt-16">
                <h2 className='text-3xl font-semibold text-gray-800'>About Us</h2>
                <p className='mt-4 text-gray-600'>We are a team of dedicated individuals working to provide the best service.</p>
            </div>
        </section>
    )
}

export default About