import React, { useEffect, useState } from 'react'
import { useLoading } from '../components/Loader/LoadingCtx';
import LoaderModal from '../components/Loader/LoaderModal';
import ReactQuill from 'react-quill';
import { deleteSinglePost, getPost, updateSinglePost } from '../Utils';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button/Button';

const EditPost = () => {
    const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";
    const formInputCss = ' h-[56px] w-[100%] pt-4 mb-3 pl-1 outline-none border rounded-md border-gray-300 focus:border-b-2 focus:border-b-darkwood focus:ease-in-out duration-200 font-bold text-gray-700'
    const { loading, showLoader, hideLoader } = useLoading();
    const {id} = useParams();
    const user = localStorage.getItem('user')

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [file,setFile] = useState('');
    const  modules  = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
            ["link", "image"],
            ["clean"],
        ]
    };
    const navigate = useNavigate();

    useEffect(()=>{
        showLoader()
        getPost(id)
        .then(postInfo => {
            setTitle(postInfo.title);
            setContent(postInfo.content);
            hideLoader()
        })
    },[])
    const updatePost = (ev) => {
        ev.preventDefault();
        const formData = new FormData();
        if (file?.[0]) {
            formData.set('file', file?.[0])
        }
        formData.set('title', title)
        formData.set('content', content);
        formData.set('id', id);
        formData.set('user', user);
        showLoader()
        updateSinglePost(formData)
        .then(responce => {
            if (responce.ok) {
                return responce.json()
            };
        })
        .then(res => {
            hideLoader()
            navigate(`/post/${id}`)
        })
    };
    const deletePost = (ev) => {
        console.log(ev);
        showLoader();
        deleteSinglePost(id,JSON.parse(user))
        .then(result => {
            hideLoader();
            navigate('/blog')
            console.log(result);
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
        <form action='/posts/edit' encType='multipart/form-data' onSubmit={updatePost}  className='flex flex-col rounded-2xl bg-lightgray w-[50%] max-md:w-[80%] mb-10 p-8 mx-auto font-light shadow-customGray'>
            <input className={formInputCss} type='title' name='title' placeholder='Заглавие' value={title} onChange={ev => setTitle(ev.target.value)}></input>
            <input className={formInputCss} type='file' name='file' onChange={ev =>setFile(ev.target.files)}></input>
            <ReactQuill value={content} modules={modules} onChange={newValue => setContent(newValue)} />
            <div  className='mt-10'><Button bg={'btn-primary'}>Редактирай пост</Button></div>
        </form>
        <div className='text-black my-5 py-3' onClick={deletePost}>Внимание!
            <div><Button bg={'btn-primary'}>Изтрий пост</Button></div>
        </div>
    </div> 
    )
}

export default EditPost
