import React from 'react'

function RecommenOne() {
    return (
        <div className=" flex flex-col md:flex-row justify-center items-center py-16 bg-[url('src/assets/img/chicken-wing-bg-black.png')] bg-no-repeat bg-cover bg-center bg-top">
            <div className='w-1/2'>
                <img src='src/assets/img/package-4.png' alt="Package 4" className='mx-auto'></img>
            </div>
            <div className='w-1/2 pt-10'>
                <h1 className='text-3xl md:text-5xl lg:text-5xl font-extrabold text-white font-sans'>CHIKEN WINGS</h1>
                <p className='text-gray-600 py-5 text-md text-white font-sans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis autem quia explicabo ullam cupiditate et neque ratione dignissimos culpa sapiente aliquam commodi, nobis iure inventore id, accusantium  <br /> impedit ad cumque.</p>
                <a href="#" className='bg-orange-500 text-center font-sans text-white px-6 py-2 rounded mt-8 inline-block hover:bg-orange-600 w-56'> ORDER NOW</a>
            </div>
        </div>
    )
}

export default RecommenOne
