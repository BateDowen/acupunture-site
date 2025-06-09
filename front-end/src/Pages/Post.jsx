import React, { useEffect, useState } from "react";
import { useLoading } from "../components/Loader/LoadingCtx";
import LoaderModal from "../components/Loader/LoaderModal";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../Utils";
import Button from "../components/Button/Button";
import { host } from "../api";
import { allPosts } from "../posts";

const Post = () => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";
  const { loading, showLoader, hideLoader } = useLoading();
  const { id } = useParams();
  // const [postInfo,setPostInfo] = useState(null);
  const postInfo = allPosts.find((postId) => postId.id === id);
  const user = localStorage.getItem("user");
  console.log("Post", postInfo);
  // useEffect(() => {
  //     showLoader()
  //     getPost(id)
  //     .then(post => {
  //         setPostInfo(post)
  //         hideLoader();
  //     })
  // }, [])
  if (!postInfo) {
    return "";
  }
  return loading ? (
    <LoaderModal />
  ) : (
    <div className="text-center bg-white relative pt-[100px] w-full mx-auto">
      <section className="flex flex-row w-full justify-around mt-[120px] mb-10 ">
        <div className={` flex flex-col w-full  mx-12`}>
          <h2 className={`w-full uppercase ${titleCss}`}>{postInfo.title}</h2>
          <h3>{new Date(postInfo.createdAt).toISOString().split("T")[0]}</h3>
          {/* {user && 
                <Link to={`/edit/${postInfo._id}`}>
                    <button className='bg-black rounded-md text-lightgray py-3 px-5 my-2'>Редактирай</button>
                </Link>
               } */}
        </div>
      </section>
      <div>
        <img
          src={`${host}${postInfo.file}`}
          className="mx-auto my-10 max-w-[90%] rounded-md shadow-customGray"
        />
      </div>
      {/* <div className='mx-auto my-10 max-w-[90%]' dangerouslySetInnerHTML={{__html: postInfo.content}} /> */}
      <div className="mx-auto my-10 max-w-[90%]">
          {postInfo.content.split("\n").map((line, index) => ( //not good way
            <p key={index} style={{ marginBottom: "1em" }}>
              {line.trim()}
            </p>
          ))}
      </div>
      <div className="py-10">
        <Link to={"/blog"}>
          <Button bg={"btn-primary"}>Назад</Button>
        </Link>
      </div>
    </div>
  );
};

export default Post;
