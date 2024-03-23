import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from '../components/Button/Button';
import { createPost } from '../Utils';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../components/Loader/LoadingCtx';
import LoaderModal from '../components/Loader/LoaderModal';

const CreatePost = () => {
    const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";
    const user = localStorage.getItem('user')
    const formInputCss = ' h-[56px] w-[100%] pt-4 mb-3 pl-1 outline-none border rounded-md border-gray-300 focus:border-b-2 focus:border-b-darkwood focus:ease-in-out duration-200 font-bold text-gray-700'
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [file,setFile] = useState('');
  const { loading, showLoader, hideLoader } = useLoading();

    const navigate = useNavigate();

    const createNewPost = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('file', file[0])
        formData.set('title', title)
        formData.set('summary', summary);
        formData.set('content', content);
        formData.set('user', user);
        showLoader()
        createPost(formData)
        .then(responce => {
            if (responce.ok) {
                return responce.json()
            };
        })
        .then(res => {
            hideLoader()
            navigate(`/blog`)
        })
    };

    return loading ? (
        <LoaderModal /> )
         : (
      <div className="text-center bg-white relative pt-[100px] w-full mx-auto">
        <section className="flex flex-row w-full justify-around mt-[120px] mb-10 ">
          <div className={` flex flex-col w-full  mx-12`}>
            <h2 className={`w-full uppercase ${titleCss}`}>
              Създай пост
            </h2>
           
          </div>
        </section>
        <form action='/posts/create-date' encType='multipart/form-data' onSubmit={createNewPost}  className='flex flex-col rounded-2xl bg-lightgray w-[50%] max-md:w-[80%] mb-10 p-8 mx-auto font-light shadow-customGray'>
            <input className={formInputCss} type='title' name='title' placeholder='Заглавие' value={title} onChange={ev => setTitle(ev.target.value)}></input>
            <input className={formInputCss} type='summary' name='summary' placeholder='Заглавие' value={summary} onChange={ev => setSummary(ev.target.value)}></input>
            <input className={formInputCss} type='file' name='file' onChange={ev =>setFile(ev.target.files)}></input>
            <ReactQuill value={content} onChange={newValue => setContent(newValue)} />
            <div  className='mt-10'><Button bg={'btn-primary'}>Създай пост</Button></div>
        </form>
    </div>
  )
}

export default CreatePost;

