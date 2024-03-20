import React from 'react'

const Blog = () => {
    const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";

    return (
      <div className="text-center bg-white relative pt-[100px] w-full mx-auto">
        <section className="flex flex-row w-full justify-around h-[200px] mt-[120px] ">
          <div className={` flex flex-col w-full mb-[30px] mx-12`}>
            <h2 className={`w-full uppercase ${titleCss}`}>
              Блог
            </h2>
           
          </div>
        </section>
        </div>
  )
}

export default Blog
