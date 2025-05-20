import React, { useState, useEffect, } from 'react';
// import Navbar from './componants/Navbar'
// import Footer from './componants/Footer'
// import { Rating } from '@mui/material'
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';


function About() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    const data = [
        { name: 'Apple', value: 70 },
        { name: 'Orange', value: 20 },
        { name: 'Watermelon', value: 10 },
    ];

    const COLORS = ['red', '#FFBB28', 'green'];
    return (

        <div className="w-full md:w-[60rem] lg:w-[60rem] mt-10 mx-auto ">
            <h3 className="text-xl font-semibold text-center mb-4">Fruit Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
            <section className='bg-gray-100 mt-10 flex flex-col items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center'>
                    <input {...register("firstname")} placeholder="First Name" />
                    <input {...register("lastname")} placeholder="Last Name" />
                    <input {...register("username")} placeholder="Username" />
                    <input {...register("password")} type="password" placeholder="Password" />
                    <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" />
                    <input {...register("phone")} placeholder="Phone" />
                    <input {...register("address")} placeholder="Address" />
                    <input {...register("email")} />
                    <Button type="submit">Submit</Button>
                </form>
            </section>
        </div>
    )
}

// return (
//     <section className='bg-gray-100' >
//         <Navbar />
//         <div className="contrainer mx-auto text-center py-16 pt-16 h-screen">
//             <h2 className='text-3xl font-semibold text-gray-800'>About Us</h2>
//             <p className='mt-4 text-gray-600 mx-auto font-sans px-5 md:w-[50rem] lg:w-[50rem]'>We are a team of dedicated individuals working to provide the best service.</p>
//             <div className="stats shadow mx-10 mt-5 border-2 flex flex-col md:flex-row lg:flex-row">
//                 <div className="stat">
//                     <div className="stat-figure text-primary">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
//                     </div>
//                     <div className="stat-title">Total Likes</div>
//                     <div className="stat-value text-primary">25.6K</div>
//                     <div className="stat-desc">21% more than last month</div>
//                 </div>
//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
//                     </div>
//                     <div className="stat-title">Page Views</div>
//                     <div className="stat-value text-secondary">2.6M</div>
//                     <div className="stat-desc">21% more than last month</div>
//                 </div>
//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <div className="avatar online">
//                             <div className="w-16 rounded-full">
//                                 <img src="src/assets/img/Chef.png" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="stat-value">86%</div>
//                     <div className="stat-title">Tasks done</div>
//                     <Rating name="half-rating" defaultValue={5} precision={0.5} className="mx-auto" />
//                 </div>
//             </div>
//         </div>
//         <Footer />
//     </section>
// )
// }

export default About