import React from 'react'
import BlogCard from '../components/Card/BlogCard';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

const Blog = () => {
    const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";
    const user = localStorage.getItem('user')
    return (
      <div className="text-center bg-white relative pt-[100px] w-full mx-auto">
        <section className="flex flex-row w-full justify-around mt-[120px] mb-10 ">
          <div className={` flex flex-col w-full  mx-12`}>
            <h2 className={`w-full uppercase ${titleCss}`}>
              Блог
            </h2>
           
          </div>
        </section>
        <div className=' mx-auto pb-10 bg-lightgray'>
            <div className="flex flex-row flex-wrap justify-start px-12 py-10">
                <BlogCard href={""} src={"../../massage.jpg"} />
                <BlogCard href={""} src={"../../massage.jpg"} />
                <BlogCard href={""} src={"../../massage.jpg"} />
                <BlogCard href={""} src={"../../massage.jpg"} />
            </div>
       {user && 
       <Link to={'/create-post'}>
            <Button bg={'btn-primary'}>Създай пост</Button>
       </Link>}
        </div>
      </div>
  )
}

export default Blog
