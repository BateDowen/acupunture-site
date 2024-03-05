import React, { useState } from 'react'
import './Form.styles.css';
import classes from '../../App.module.css';
import Button from '../Button/Button';



const Form = (props) => {
  //  TODO validate user input
  const emailValidator = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const phoneValidator = /^08[0-9]{8}$/g;

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [nameError,setNameError] = useState(false);
  const [emailError,setEmailError] = useState(false);
  const [phoneError,setPhoneError] = useState(false);

  const nameHandler = (e) => {
   setNameError(name === '')
  };
  const emailHandler = (e) => {
    setEmailError(!e.target.value.match(emailValidator))
   };
   const phoneHandler = (e) => {
    setPhoneError(!e.target.value.match(phoneValidator))
   };
  return (
    <div className=' mx-auto '>
      <form action="" className={`form-primary ${classes['fade-in']}`} onSubmit={props.onSubmit}>
        <div className='relative w-[100%] flex flex-col text-slate-500 px-1'>
            <label htmlFor="name" className=' absolute top-1 left-[9px] text-sm '>Вашето име</label>
            <input id='name' name='name' type="text" placeholder='Име и фамилия' 
             value={name} onChange={(e) => {
              setName(e.target.value)
              setNameError(e.target.name === '')} } 
              onBlur={nameHandler}
             className={`${nameError ? 'form-danger-input' :'form-primary-input' }`}  />
        </div>
        <div className='my-5 flex flex-row max-sm:flex-col'>
            <div className='relative w-[50%] max-sm:w-[100%] my-1 flex flex-col text-slate-500 px-1'>
                <label htmlFor="email" className=' absolute top-1 left-[9px] text-sm '>Вашият имейл</label>
                <input id='email' name='email' type="text" placeholder='Имейл' 
                  value={email} onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailError(!e.target.value.match(emailValidator))}} 
                    onBlur={emailHandler}
                  className={`${emailError ? 'form-danger-input' :'form-primary-input' }`} />
            </div>
            <div className='relative w-[50%] max-sm:w-[100%] my-1 flex flex-col text-slate-500 px-1'>
                <label htmlFor="phone" className=' absolute top-1 left-[9px] text-sm '>Вашият телефон</label>
                <input id='phone' name='phone' type="text" placeholder='Телефон'
                 value={phone} onChange={(e) => {
                  setPhone(e.target.value)
                  setPhoneError(!e.target.value.match(phoneValidator))}} 
                  onBlur={phoneHandler}
                 className={`${phoneError ? 'form-danger-input' :'form-primary-input' }`} />
            </div>
        </div>
        <div>
        <div className='relative w-[100%] flex flex-col text-slate-500 px-1'>
            <label htmlFor="message" className=' absolute top-1 left-[9px] text-sm'>Кратко съобщение</label>
            <textarea id='name' name='message' type="text" placeholder='Съдържание'
             className='form-primary-input mt-1' />
        </div>
        </div>
        <div className='mt-5'>
          <Button bg={'btn-primary'} >{props.bntText}</Button>
        </div>
      </form>
    </div>
  )
}

export default Form;

