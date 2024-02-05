import React from 'react'

const BlogCard = ({href,src}) => {
  return (
    <div className='flex flex-col relative mx-auto min-w-[280px] px-3 md:w-[25%] items-center '>
      <a href={href} className='pointer'>
        <img src={src} alt="" className='mx-auto py-2 align-middle
         rounded-3xl max-[640px]:max-w-[80%] lg:h-[180px]  sm:h-[220px] ' />
      </a>
      <a href={href} className='text-[#2A6466] mx-5 my-5 no-underline text-center font-bold p-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro.
      </a>
      <div className='text-[#FFFFFF] font-bold rounded-full
      bg-[#48b6bb] cursor-pointer py-2 px-5 absolute max-md:right-[15%] max-sm:right-[2%] right-[-1%] top-[-5%]'>
        05.02.2024
      </div>
    </div>
  )
}

export default BlogCard;

