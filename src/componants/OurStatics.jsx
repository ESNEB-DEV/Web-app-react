import React from 'react'

function OurStatics() {
    return (
        <div className=" flex flex-col md:flex-row justify-center py-16 bg-[url('src/assets/img/stats-bg.png')] bg-no-repeat bg-cover bg-center bg-top">
            <div>
                <div className='w-full flex justify-center flex-col items-center'>
                    <h1 className='text-5xl font-extrabold font-sans'>OUR STATISTICS</h1>
                    <p className='text-gray-600 mt-4 text-md text-center font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aut reiciendis iusto similique,<br />  dolores veritatis. Exercitationem nesciunt saepe repellat officia veniam</p>
                </div>
                <div className="flex flex-col md:flex-row pt-5 gap-10 ">
                    <div className="flex-1 w-full md:w-1/3 border-4 h-60 border-black flex justify-center items-center flex-col">
                        <h1 className='text-5xl font-extrabold font-sans'>2k+</h1>
                        <h2 className='text-xl font-abold font-sans pt-4'>CUSTOMER</h2>
                    </div>
                    <div className="flex-1 w-full md:w-1/3 border-4 h-60 border-black flex justify-center items-center flex-col">
                        <h1 className='text-5xl font-extrabold font-sans'>500</h1>
                        <h2 className='text-xl font-abold font-sans pt-4'>STORE</h2>
                    </div>
                    <div className="flex-1 w-full md:w-1/3 border-4 h-60 border-black flex justify-center items-center flex-col">
                        <h1 className='text-5xl font-extrabold font-sans'>50</h1>
                        <h2 className='text-xl font-abold font-sans pt-4'>CHEF</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStatics
