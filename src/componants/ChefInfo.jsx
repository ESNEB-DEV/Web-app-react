import React from 'react'

function ChefInfo() {
  return (
      <div className="mx-auto py-20 flex flex-col items-center bg-[url('src/assets/img/chef-bg.png')] bg-no-repeat bg-cover bg-center bg-topr">
        <img src='src/assets/img/chef.png' alt="chef" className='mx-auto'></img>
        <p className='mt-10 text-center font-sans text-gray-600 px-5 md:w-[50rem] lg:w-[50rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis tempora voluptate officia fugit, officiis unde nesciunt aliquam numquam temporibus tempore?</p>
        <h2 className='my-10 font-bold font-sans text-2xl'>Luella Harris</h2>
      </div>
  )
}

export default ChefInfo
