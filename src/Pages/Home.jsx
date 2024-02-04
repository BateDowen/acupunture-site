import Button from "../components/Button/Button";
import BlogCard from "../components/Card/BlogCard";

const Home = () => {
  return (
    
    <div className="text-center  absolute top-[24%] w-full">
      <section
        className="flex flex-col w-full h-[300px] sm:h-[400px]
          bg-[url('../../../public/topSectionImage.jpg')]
          opacity-50 bg-cover bg-center
           "
      ></section>
      <div
        className="text-center mt-12 w-full absolute top-[10%]"
      >
        <h1 className="  uppercase text-2xl sm:text-4xl text-[#2A6466] font-bold mb-3 ">
          Студио за рехабилитация
        </h1>
        <p className=" text-[20px] text-[#414141] mb-3">Масажен терапевт</p>

        <Button>Запазете час</Button>
      </div>
      <div className=" pt-12 pb-12 w-full ">
          <div className="flex flex-row justify-center max-[640px]:flex-col items-center px-12">
            <div className="flex flex-col text-left mx-4">
                <h2 className=" uppercase text-[#2A6466] text-2xl sm:text-3xl font-bold mb-3">За нас</h2>
                <p className=" my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Cupiditate repellat amet omnis fugit. Porro consequuntur quod explicabo et fuga facilis?
                   Cupiditate repellat amet omnis fugit. Porro consequuntur quod explicabo et fuga facilis?
                   Cupiditate repellat amet omnis fugit. Porro consequuntur quod explicabo et fuga facilis?
                   </p>
                <p className="my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Cupiditate repellat amet omnis fugit. Porro consequuntur quod explicabo et fuga facilis?</p>
              <div className="my-2">
                <Button>Контакти</Button>
              </ div>
            </div>
                <img src="'../../../public/massage.jpg" alt="massage" 
                  className="mx-4 py-2 rounded-3xl w-[350px] lg:h-[280px] sm:h-[320px]" />
          </div>
      </div>
      <div className=" my-6 mx-auto">
        <h3 className="text-[#48B6BB] basis-full font-medium text-3xl uppercase mb-10">Последни публикации</h3>
        {/* // TODO blog-card template */}
        <div className="flex flex-row flex-wrap justify-center">
          <BlogCard href={''} src={'../../../public/massage.jpg'} />
          <BlogCard href={''} src={'../../../public/massage.jpg'} />
          <BlogCard href={''} src={'../../../public/massage.jpg'} />
          <BlogCard href={''} src={'../../../public/massage.jpg'} />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
