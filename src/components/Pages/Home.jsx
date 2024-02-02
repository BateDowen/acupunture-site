import Button from "../Button/Button";

const Home = () => {
  return (
    <div className="text-center">
    <section className="flex flex-col w-full h-[300px] sm:h-[400px]
     bg-[url('../../../public/topSectionImage.jpg')]
     opacity-50 bg-cover bg-center
     absolute top-[24%] ">
        {/* <img src="../../../public/topSectionImage.jpg" alt="comfort" className="w-full m-auto bg-center h-[300px] sm:h-[400px]
         opacity-40 animate-fade-up "/> */}
    </section>
        <div className="text-center mt-12 absolute top-[24%] max-[440px]:left-[10%]
         max-[640px]:left-[15%]
         sm:left-[25%] sm:right-[25%]">
            <h1 className=" uppercase text-2xl sm:text-4xl text-[#2A6466] font-bold mb-3 ">Студио за рехабилитация</h1>
            <p className=" text-[20px] text-[#414141] mb-3">Масажен терапевт</p>
            
            <Button>Запазете час</Button>
        </div>
    </div>
  )
}

export default Home;

