import React from 'react'

function InfoTwo() {
    return (
        <div className='container mx-auto flex flex-col md:flex-row justify-center py-16 bg-white '>
            <div className="w-full py-6  p-4">
                <h2 className='text-3xl font-semibold text-black'>Welcome to the world of food.</h2>
                <p className='text-gray-600 mt-4 w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo eum aliquam reprehenderit cum in magni voluptatum alias est fugit ipsam! Ipsam id blanditiis iure ad, earum inventore molestiae molestias.</p>
            </div>
            <div className="w-full pr-20 p-4">
                <img src="src/assets/img/chef-bg.png" alt="Banner" className=' w-[800px] h-[400px] rounded-3xl' />
            </div>
        </div>
    )
}

export default InfoTwo