import React from 'react'

const BlogCard = ({href,src}) => {
  return (
    <div className='flex flex-col mx-3 md:w-[25%] items-center '>
      <a href={href} className='pointer'>
        <img src={src} alt="" className='mx-auto py-2 align-middle
         rounded-3xl max-[640px]:max-w-[80%] lg:h-[280px]  sm:h-[320px] transition-all ease-linear ' />
      </a>
      <a href={href} className='text-[#2A6466] no-underline text-center font-bold p-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro.
      </a>
    </div>
  )
}

export default BlogCard;

