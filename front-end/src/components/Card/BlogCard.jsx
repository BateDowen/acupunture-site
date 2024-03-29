import React from 'react'
import { Link } from 'react-router-dom';
import { host } from '../../api';

const BlogCard = ({href,src,createAt,title}) => {
  return (
    <div className='flex flex-col relative mx-auto min-w-[280px] px-3 md:w-[25%] items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>
      <Link to={href} className='pointer'>
        <img src={`${host}${src}`} alt="" className='mx-auto py-2 align-middle
         rounded-3xl max-[640px]:max-w-[80%] lg:h-[180px]  sm:h-[220px] ' />
      </Link>
      <Link to={href} className='text-black mx-5 my-5 no-underline text-center font-bold p-2'>
        {title}
      </Link>
      <div className='text-[#FFFFFF] font-bold rounded-full
      bg-darkwood cursor-pointer py-2 px-5 absolute max-md:right-[15%]
       max-sm:right-[5%] right-[-1%] top-[-5%] shadow-customGray'>
        {createAt}
      </div>
    </div>
  )
  
}

export default BlogCard;

