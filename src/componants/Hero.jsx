import React from 'react'

function Hero() {
    return (

        <div className="bg-[url('src/assets/img/banner-bg.png')] h-[650px] md:h-[700px] lg:h-[700px]  bg-fixed bg-top bg-no-repeat bg-cover bg-center text-white py-16">
            <div className="container mx-auto text-center">
                <h1 className='text-7xl md:text-8xl lg:text-8xl font-bold font-sans'>DISCONUT 50%</h1>
                <p className='mt-4 text-md font-sans px-5 md:w-[50rem] lg:w-[50rem] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus impedit aspernatur libero rem corporis eveniet laudantium delectus aut ea officiis!</p>
                <a href="#" className='bg-orange-500 font-sans text-white px-6 py-2 rounded mt-8 inline-block hover:bg-orange-600 w-56'> ORDER NOW</a>
            </div>

        </div>
    )
}

export default Hero