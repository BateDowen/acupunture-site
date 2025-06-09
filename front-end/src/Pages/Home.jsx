import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import BlogCard from "../components/Card/BlogCard";
import Form from "../components/Form/Form";
import { useLoading } from "../components/Loader/LoadingCtx";
import { useEffect, useState } from "react";
import { getPosts, writeMeEmail } from "../Utils";
import LoaderModal from "../components/Loader/LoaderModal";
import { host } from "../api";
import Prices from "./Prices";
import { allPosts } from "../posts";

const Home = () => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";
  const { loading, showLoader, hideLoader } = useLoading();
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   showLoader();
  //   getPosts().then((result) => {
  //     console.log('home', {posts});
  //     setPosts(result.posts);
  //     hideLoader();
  //   });
  // }, []);
  const writeEmail = (ev) => {
    ev.preventDefault();
    let formData = new FormData(ev.currentTarget);
    let { email, name, phone, message } = Object.fromEntries(formData);
    showLoader();
    writeMeEmail(email, name, phone, message).then((result) => {
      hideLoader();
      ev.target.reset();
    });
  };
  return loading ? (
    <LoaderModal />
  ) : (
    <div className="text-center relative pt-[100px] w-full">
      <section
        className="flex flex-col w-full h-[350px] sm:h-[300px]
        bg-[url('../public/topSectionImage.jpg')]
        opacity-70   bg-cover bg-center
           "
      ></section>

      <div className=" w-full absolute top-[6%] md:top-[8%] flex flex-col md:flex-row justify-center items-center">
        <p className=" xl:text-[39px] text-[20px] text-center font-bold text-[#2a3936] w-[80%] mx-auto">
          Добре дошли в “Алтернативен център за развитие”. Място, създадено да
          полива Душата , за да Разцъфти Цялото.{" "}
        </p>
      </div>
      <div className=" pt-12 pb-12 mx-auto ">
        <div className="flex flex-row justify-center max-[780px]:flex-col items-center px-12">
          <img
            src="../../zlati.png"
            alt="massage"
            className="mx-4 mb-3 rounded-full  shadow-customGray bg-center  w-[350px] lg:h-[280px] sm:h-[320px]"
          />
          <div className="flex flex-col text-left mx-4">
            <p className="font-bold text-xl my-2 text-[#82a490]">
              Здравейте! Казвам се Златомир Трифонов
            </p>
            <p className=" my-2 text-[#82a490] md:text-xl font-semibold">
              Осигурявам това пространство, защото усещам, че искам и мога да го
              направя за Вас. То е тук, за да обогати съществуващите методи за
              справяне с психологически и духовни състояния. Идеята се роди след
              четири години активна работа с хора – основно по отношение на
              физическото състояние. Лекувах чрез алтернативни методи –
              акупунктура и енергийна работа (Космоенергетика, Рейки). С времето
              се убедих, че физическото състояние е следствие на енергийното, а
              то – под пряко влияние на мисловните форми и вярванията, с които
              човек си служи, съзнателно или не. В мен се зароди дълбоко желание
              да стигам до корена на състоянието, като се отработват мисли,
              чувства и характерът на индивида. Дълго търсих достатъчно дълбинни
              средства, с които да си служа и чрез които да служа на хората.
              Открих изключителна сила в Aстропсихологията и вплетох целия си
              личен и професионален опит в знанията, които ми даде Астрологията
              като наука. Приветствам всеки, който резонира с думите ми, ще се
              радвам да Ви бъда полезен!
            </p>
            <div className="my-2">
              <NavLink to={"/contacts"}>
                <Button bg="btn-primary">Контакти</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto py-5 bg-wood">
        <h3 className="text-black basis-full font-medium text-3xl uppercase mb-10">
          Последни публикации
        </h3>
        <div className="flex flex-row flex-wrap justify-start px-12">
          {allPosts.length > 0 &&
            allPosts.map((post) => {
              const date = new Date(post.createdAt);
              const formattedDate = date.toISOString().split("T")[0];
              return (
                <BlogCard
                  key={post.id}
                  href={`/post/${post.id}`}
                  src={post.file}
                  title={post.title}
                  createAt={formattedDate}
                />
              );
            })}
        </div>
        <div className="my-2">
          <NavLink to={"/blog"}>
            <Button bg="btn-secondary">Виж всички</Button>
          </NavLink>
        </div>
      </div>
      <div className="mb-5 mx-auto">
        <Prices inHomePage={true} />
      </div>
      <div className="mx-auto py-5 bg-lightgray ">
        <h3 className={`uppercase ${titleCss} py-6`}>Пишете ни</h3>
        <Form btnText="Изпрати" message={true} onSubmit={writeEmail} />
      </div>
    </div>
  );
};

export default Home;
