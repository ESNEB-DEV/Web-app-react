import React from 'react'

export default function InfoOne() {
    return (

        <div className=" flex flex-col md:flex-row justify-center py-16  bg-[url('src/assets/img/popular-bg.png')] bg-no-repeat bg-cover bg-center bg-top">
            <div>
                <div className='w-full flex justify-center flex-col items-center'>
                    <h1 className='text-5xl font-extrabold font-sans'>POPULAR MENU</h1>
                    <p className='text-gray-600 mt-4 text-md text-center font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laborum? Nulla <br /> laboriosam cupiditate temporibus autem!</p>
                </div>
                <div className="flex flex-col md:flex-row pt-4 py-10">
                    <div className="w-full md:w-1/3 p-4 px-8">
                        <img src="src/assets/img/package-1.png" alt="Package 1" className='mx-auto' />
                        <h2 className="font-extrabold text-lg text-center pt-2 font-sans">PACKAGE I</h2>
                        <p className="text-gray-600 mt-4 text-md text-center  font-sans">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Laboriosam, illo?</p>
                    </div>

                    <div className="w-full md:w-1/3 p-4 px-8">
                        <img src='src/assets/img/package-2.png' alt="Package 2" className='mx-auto'></img>
                        <h2 className='font-extrabold text-lg text-center pt-2 font-sans'>PACKAGE II</h2>
                        <p className='text-gray-600 mt-4 text-md text-center  font-sans'>Lorem ipsum, dolor sit amet consectetur <br />  adipisicing elit. Officiis, maxime!</p>
                    </div>

                    <div className="w-full md:w-1/3 p-4 px-8">
                        <img src='src/assets/img/package-3.png' alt="Package 2" className='mx-auto'></img>
                        <h2 className='font-extrabold text-lg text-center pt-2 font-sans'>PACKAGE III</h2>
                        <p className='text-gray-600 mt-4 text-md text-center  font-sans'>Lorem ipsum dolor sit amet consectetur, <br />  adipisicing elit. Nisi, deserunt.</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

