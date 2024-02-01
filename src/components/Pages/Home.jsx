import Button from "../Button/Button";

const Home = () => {
  return (
    <section className="flex flex-col w-full bg-[url('../../../public/topSectionImage.jpg')] m-auto">
        {/* <img src="../../../public/topSectionImage.jpg" alt="comfort" className="w-full m-auto bg-center h-[300px] sm:h-[400px]
         opacity-40 animate-fade-up "/> */}
        <div>
            <h1>Студио за рехабилитация</h1>
            <p>Масажен терапевт</p>
            
            <Button>Запазете час</Button>
        </div>
    </section>
  )
}

export default Home;

