import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const BlogCard = ({ image, title, description }) => {
  return (
    <>
        <div className='dark:text-white group'>
            <div className='overflow-hidden'>
                <img src={image} alt="" 
                className='mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300'
                />
            </div>
            <div className="p-4 ml-6 space-y-2 -translate-y-16 bg-white dark:bg-slate-950">
                <h1 className="text-2xl font-semibold line-clamp-1">{title}</h1>
                <p className="text-sm text-gray-500 line-clamp-4">{description}</p>
                <div className="flex justify-end pr-4 text-gray-500">
                    <FaArrowRight className="duration-300 group-hover:text-primary group-hover:translate-x-2" />
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCard