import React from 'react'

function InfoTwo() {
    return (
        <div className='container mx-auto flex items-start justify-center py-16 bg-white'>
            <div className="w-1/2 py-6 ">
                <h2 className='text-3xl font-semibold text-black'>Welcome to the world of food.</h2>
                <p className='text-gray-600 mt-4 w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo eum aliquam reprehenderit cum in magni voluptatum alias est fugit ipsam! Ipsam id blanditiis iure ad, earum inventore molestiae molestias.</p>
            </div>
            <div className="w-1/2">
                <img src="src/assets/img/chef-bg.png" alt="Banner" className=' w-[800px] h-[400px] rounded-3xl' />
            </div>
        </div>
    )
}

export default InfoTwo