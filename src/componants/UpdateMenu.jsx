import React from 'react'

function UpdateMenu() {
    return (
        <div className=" flex flex-col md:flex-row justify-center py-16 bg-[url('src/assets/img/update-bg.png')] bg-no-repeat bg-cover bg-center bg-top h-screen">
            <div className='w-full flex justify-center flex-col items-center'>
                <h1 className='text-3xl md:text-5xl lg:text-5xl font-extrabold font-sans px-5'>DON'T MISS OUR UPDATE</h1>
                <p className='text-gray-600 py-10 text-wrap text-md text-center font-sans px-5 md:w-[50rem] lg:w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sunt qui, labor e repudiandae beatae ut unde. Et saepe,libero quos, minus, illo cum adipisci magni dignissimos tempora doloribus modi aut?</p>
                <div className='flex flex-col md:flex-row lg:flex-row items-center'>
                    <input type="text" className="input join-item w-96 focus:outline-none mb-5 md:mb-0" placeholder="Your Email" />
                    <button className="btn join-item bg-zinc-800 hover:bg-zinc-900 text-white font-sans border-none w-36 focus:outline-none">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateMenu
