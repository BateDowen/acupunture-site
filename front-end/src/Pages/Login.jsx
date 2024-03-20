import React, { useState } from 'react'
import classes from '../App.module.css';
import '../components/Form/Form.styles.css';
import Button from '../components/Button/Button';
import { login } from '../Utils';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../components/Loader/LoadingCtx';
import LoaderModal from "../components/Loader/LoaderModal";


const Login = () => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-6";
  const [visable,setVisable ] = useState(false);
  const [response, setResponse] = useState(null);
  const { loading, showLoader, hideLoader } = useLoading();

  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let { name,password } = Object.fromEntries(formData);
    showLoader()
    login(name,password)
    .then(user => {
      console.log(user);
        if (user.err) {
            setResponse(user.message);
            
        } else {
        console.log(user);
        localStorage.setItem('user',JSON.stringify(user));
        setResponse(null);
        navigate('/appointments')
        }
        hideLoader()
        // e.target.reset()
    })
  };

  return loading ? (
    <LoaderModal /> )
     : (
    // TODO loading, try redux
    <div className=" bg-lightgray relative pt-[100px] w-full mx-auto text-center">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mb-[30px] mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Влез</h2>
        </div>
      </section>
      <div className='my-5 mx-auto max-w-[70%]'>
        <p>{response || ''}</p>
      <form action="" className={`form-primary ${classes['fade-in']}`} onSubmit={onSubmit}>
      <div className='my-5 flex flex-col max-sm:flex-col'>
            <div className='relative  max-sm:w-[100%] my-1 flex flex-col text-slate-500 px-1'>
                <label htmlFor="name" className=' absolute top-1 left-[9px] text-sm '>Име</label>
                <input id='name' name='name' type="text" placeholder='Име'
                className='form-primary-input' />
            </div>
            <div className='relative  max-sm:w-[100%] my-1 flex flex-col text-slate-500 px-1'>
                <label htmlFor="password" className=' absolute top-1 left-[9px] text-sm '>Парола</label>
                <input id='password' name='password' type={visable ? 'text' : 'password'} placeholder='Парола'
                className='form-primary-input' />
                <div className='w-[20px] h-[20px] absolute right-3  top-6' onClick={() => setVisable(visability => !visability)}>
                    <img src="data:image/png;base64,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"></img>
                </div>
            </div>
        </div>
        <div className='px-2 text-left'>
          <Button bg={'btn-primary'} >Влез</Button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login
