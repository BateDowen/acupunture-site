import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import BlogCard from "../components/Card/BlogCard";
import Form from "../components/Form/Form";

const Home = () => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";
  return (
    <div className="text-center relative pt-[100px] w-full">
      <section
        className="flex flex-col w-full h-[300px] sm:h-[400px]
          bg-[url('../public/topSectionImage.jpg')]
          opacity-50 bg-cover bg-center
           "
      ></section>
      <div className="text-center  w-full absolute top-[8%] sm:top-[10%] md:top-[13%]">
        <h1 className={`uppercase  ${titleCss}`}>Златомир Трифонов</h1>
        <p className=" text-[20px]  text-[#414141] mb-3">Рехабилитация и акупунктура</p>
       
      </div>
      <div className=" pt-12 pb-12 w-full bg-lightgray ">
        <div className="flex flex-row justify-center max-[640px]:flex-col items-center px-12">
          <div className="flex flex-col text-left mx-4">
            <h2 className={`uppercase ${titleCss}`}>За мен</h2>
            <p className=" my-2">
              Работата ми е базирана в използването на няколко методики за
              справяне с хронична болка, травми и различни състояния на тялото .
              Лечебният масаж е в основата на първи избор, съчетан с акупунктура
              ( иглотерапия) и вендузотерапия.
            </p>
            <div className="my-2">
              <NavLink to={"/contacts"}>
                <Button bg="btn-primary">Контакти</Button>
              </NavLink>
            </div>
          </div>
          <img
            src="../../massage.jpg"
            alt="massage"
            className="mx-4 py-2 rounded-3xl w-[350px] lg:h-[280px] sm:h-[320px]"
          />
        </div>
      </div>
      <div className=" mx-auto py-5 bg-wood">
        <h3 className="text-black basis-full font-medium text-3xl uppercase mb-10">
          Последни публикации
        </h3>
        <div className="flex flex-row flex-wrap justify-start px-12">
          <BlogCard href={""} src={"../../massage.jpg"} />
          <BlogCard href={""} src={"../../massage.jpg"} />
          <BlogCard href={""} src={"../../massage.jpg"} />
          <BlogCard href={""} src={"../../massage.jpg"} />
        </div>
        <div className="my-2">
          <Button bg="btn-secondary">Виж всички</Button>
        </div>
      </div>
      <div className="mx-auto py-5 bg-lightgray ">
        <h3 className={`uppercase ${titleCss} py-6`}>Пишете ни</h3>
        <Form btnText='Изпрати' message={true} />
      </div>
    </div>
  );
};

export default Home;
