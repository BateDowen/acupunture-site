import React from 'react'
import Button from '../components/Button/Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  const titleCss = "text-hoverBlue text-2xl sm:text-3xl font-bold mb-3";
  
  return (
    <div className="bg-white relative pt-[100px] w-full mx-auto text-center">
    <section className="flex flex-row w-full justify-around mt-[80px] ">
      <div className={` flex flex-col w-full mb-[30px] mx-12 text-center`}>
        <img src="../../public/error.png" alt="" width={400} height={200} className='mx-auto mb-5'/>
        <h2 className={`w-full uppercase ${titleCss} `}>Нещо се обърка..</h2>
      </div>
      </section>
      <div className='mx-auto mb-5 text-center'>
        <NavLink to={'/'} >
            <Button bg='btn-primary'>Назад</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage;

