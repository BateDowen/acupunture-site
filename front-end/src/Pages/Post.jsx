import React, { useEffect, useState } from 'react'
import { useLoading } from '../components/Loader/LoadingCtx';
import LoaderModal from '../components/Loader/LoaderModal';
import { Link, useParams } from 'react-router-dom';
import { getPost } from '../Utils';
import Button from '../components/Button/Button';

const Post = () => {
    const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";
    const { loading, showLoader, hideLoader } = useLoading();
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        showLoader()
        getPost(id)
        .then(post => {
            setTitle(post.title);
            setImgSrc(post.file);
            setContent(post.content);
            hideLoader();
            console.log(post);
        })
    }, [])
    return loading ? (
        <LoaderModal />
      ) : (
          <div className="text-center bg-white relative pt-[100px] w-full mx-auto">
            <section className="flex flex-row w-full justify-around mt-[120px] mb-10 ">
              <div className={` flex flex-col w-full  mx-12`}>
                <h2 className={`w-full uppercase ${titleCss}`}>
                  {title}
                </h2>
               
              </div>
            </section>
            <div>
                <img src={`http://localhost:3030/${imgSrc}`} className='mx-auto my-10 max-w-[90%]rounded-md shadow-customGray' />
            </div>
            <div className='mx-auto my-10' dangerouslySetInnerHTML={{__html: content}} />
            <div className="py-10">
                <Link  to={"/blog"}>
                    <Button bg={"btn-primary"}>Назад</Button>
                </Link>
            </div>
    </div>
  )
}

export default Post
