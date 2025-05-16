import React from 'react'
import Navbar from './componants/Navbar'
import Footer from './componants/Footer'
import { Rating } from '@mui/material'

function About() {
    return (
        <section className='bg-gray-100' >
            <Navbar />
            <div className="contrainer mx-auto text-center py-16 pt-16  h-screen">
                <h2 className='text-3xl font-semibold text-gray-800'>About Us</h2>
                <p className='mt-4 text-gray-600'>We are a team of dedicated individuals working to provide the best service.</p>
                {/* <br /> */}
                <div className="stats shadow mt-10">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div className="stat-title">Total Likes</div>
                        <div className="stat-value text-primary">25.6K</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Page Views</div>
                        <div className="stat-value text-secondary">2.6M</div>
                        <div className="stat-desc">21% more than last month</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <div className="avatar online">
                                <div className="w-16 rounded-full">
                                    <img src="src/assets/img/Chef.png" />
                                </div>
                            </div>
                        </div>
                        <div className="stat-value">86%</div>
                        <div className="stat-title">Tasks done</div>
                        <Rating name="half-rating" defaultValue={5} precision={0.5} />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default About