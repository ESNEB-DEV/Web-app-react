import React from 'react'

export default function InfoOne() {
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-center py-16 bg-white '>
            <div className="w-full pr-20 p-4">
                <img src="src/assets/img/banner-bg.png" alt="Banner" className=' w-[800px] h-[400px] rounded-3xl' />
            </div>
            <div className="w-full py-6  p-4">
                <h2 className='text-3xl font-semibold text-black'>Welcome to the world of food.</h2>
                <p className='text-gray-600 mt-4 w-64'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, aspernatur saepe odit repellat illum est eligendi iste libero repudiandae fugit voluptates ex dignissimos quaerat maiores atque pariatur tenetur suscipit aut eum optio! Aliquid soluta eaque recusandae. Unde quisquam alias laboriosam?</p>
            </div>
        </div>
    )
}

