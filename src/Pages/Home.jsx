import Button from "../components/Button/Button";
import BlogCard from "../components/Card/BlogCard";
import Form from "../components/Form/Form";

const Home = () => {
  const titleCss = 'text-hoverBlue text-2xl sm:text-3xl font-bold mb-3'
  return (
    
    <div className="text-center  absolute top-[21%] w-full">
      <section
        className="flex flex-col w-full h-[300px] sm:h-[400px]
          bg-[url('../../../public/topSectionImage.jpg')]
          opacity-50 bg-cover bg-center
           "
      ></section>
      <div
        className="text-center mt-12 w-full absolute top-[3%]"
      >
        <h1 className={`uppercase ${titleCss}`}>
          Студио за рехабилитация
        </h1>
        <p className=" text-[20px] text-[#414141] mb-3">Масажен терапевт</p>

        <Button bg={'lightBlue'} hover={'hoverBlue'}>Запазете час</Button>
      </div>
      <div className=" pt-12 pb-12 w-full ">
          <div className="flex flex-row justify-center max-[640px]:flex-col items-center px-12">
            <div className="flex flex-col text-left mx-4">
                <h2 className={`uppercase ${titleCss}`}>За нас</h2>
                <p className=" my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                   Cupiditate repellat amet omnis fugit. Porro consequuntur quod explicabo et fuga facilis?
                   Cupiditate repellat amet omnis fugit. Porro consequuntur quod explicabo et fuga facilis?
                   Cupiditate repellat amet omnis fugit. Porro consequuntur quod explicabo et fuga facilis?
                   </p>
                <p className="my-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Cupiditate repellat amet omnis fugit. Porro consequuntur quod explicabo et fuga facilis?</p>
              <div className="my-2">
                <Button bg={'lightBlue'} hover={'hoverBlue'}>Контакти</Button>
              </ div>
            </div>
                <img src="'../../../public/massage.jpg" alt="massage" 
                  className="mx-4 py-2 rounded-3xl w-[350px] lg:h-[280px] sm:h-[320px]" />
          </div>
      </div>
      <div className=" my-6 mx-auto py-5 bg-lightBlue">
        <h3 className="text-[#FFFFFF] basis-full font-medium text-3xl uppercase mb-10">Последни публикации</h3>
        <div className="flex flex-row flex-wrap justify-start px-12">
          <BlogCard href={''} src={'../../../public/massage.jpg'} />
          <BlogCard href={''} src={'../../../public/massage.jpg'} />
          <BlogCard href={''} src={'../../../public/massage.jpg'} />
          <BlogCard href={''} src={'../../../public/massage.jpg'} />
        </div>
        <div className="my-2">
          <Button bg={'hoverBlue'} hover={'black'}>Виж всички</Button>
        </div>
      </div>
      <div className="mx-auto py-5 bg-[#F5FCFC] ">
        <h3 className={`uppercase ${titleCss}`}>Пишете ни</h3>
        <Form />
      </div>
    </div>
  );
};

export default Home;
