import React, { useEffect, useState } from 'react'
import BlogCard from '../components/Card/BlogCard';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import { useLoading } from '../components/Loader/LoadingCtx';
import LoaderModal from '../components/Loader/LoaderModal';
import { getPosts } from '../Utils';

const Blog = () => {
    const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";
    const user = localStorage.getItem('user');
    const { loading, showLoader, hideLoader } = useLoading();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1);
    useEffect(() => {
      showLoader()
      getPosts(page)
      .then(result => {
        setPosts(result.posts);
        setMaxPages(Math.ceil(result.totalItems / 4))
        hideLoader();
      })
    },[page])

     return loading ? (
    <LoaderModal />
  ) : (
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
              {posts.map(p => {
                const date = new Date(p.createdAt);
                const formattedDate = date.toISOString().split('T')[0];
                return (
                  <BlogCard key={p._id} href={`/post/${p._id}`} src={p.file} title={p.title} createAt={formattedDate}/>
                )
              })}
              
            </div>
            {user && 
            <Link to={'/create-post'}>
                  <Button bg={'btn-primary'}>Създай пост</Button>
            </Link>}
            <div className='my-5 flex flex-row justify-center'>
              <div onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}><Button bg={'btn-primary'}>Предишна</Button></div>
              <p onClick={() => setPage(page)} className='text-black mx-3 cursor-pointer font-bold p-2'>{page} от {maxPages}</p>
              <div onClick={() => setPage(prevPage => Math.min(prevPage + 1, maxPages))}><Button bg={'btn-primary'}>Следваща</Button></div>
            </div>
        </div>
      </div>
  )
}

export default Blog
