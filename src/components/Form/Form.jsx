import React from 'react'
import './Form.styles.css';


const Form = () => {
   
  return (
    <div className=' mx-auto '>
      <form action="" className='form-primary'>
        <div className='relative w-[100%] flex flex-col text-slate-500 px-1'>
            <label htmlFor="name" className=' absolute top-1 left-[9px] text-sm '>Вашето име</label>
            <input id='name' type="text" placeholder='Име и фамилия'
             className='form-primary-input' />
        </div>
        <div className='my-5 flex flex-row max-sm:flex-col'>
            <div className='relative w-[50%] max-sm:w-[100%] my-1 flex flex-col text-slate-500 px-1'>
                <label htmlFor="email" className=' absolute top-1 left-[9px] text-sm '>Вашият имейл</label>
                <input id='email' type="text" placeholder='Имейл'
                className='form-primary-input' />
            </div>
            <div className='relative w-[50%] max-sm:w-[100%] my-1 flex flex-col text-slate-500 px-1'>
                <label htmlFor="phone" className=' absolute top-1 left-[9px] text-sm '>Вашият телефон</label>
                <input id='phone' type="text" placeholder='Телефон'
                className='form-primary-input' />
            </div>
        </div>
        <div>
        <div className='relative w-[100%] flex flex-col text-slate-500 px-1'>
            <label htmlFor="name" className=' absolute top-1 left-[9px] text-sm'>Кратко съобщение</label>
            <textarea id='name' type="text" placeholder='Съдържание'
             className='form-primary-input mt-1' />
        </div>
        </div>
      </form>
    </div>
  )
}

export default Form;

