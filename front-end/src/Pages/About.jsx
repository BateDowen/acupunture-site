const About = () => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";

  return (
    <div className="text-center bg-white relative pt-[100px] w-full mx-auto">
      <section className="flex flex-row w-full justify-around h-[200px] mt-[120px] ">
        <div className={` flex flex-col w-full mb-[30px] mx-12`}>
          <h2 className={`w-full uppercase ${titleCss}`}>
            Здравейте. Аз съм Златомир.
          </h2>
          <h3 className="text-black text-xl sm:text-2xl font-bold mt-3">
            Рехабилитатор. Масажен терапевт.
          </h3>
        </div>
      </section>
      <div className=" bg-lightgray py-10 ">
        <div className="mx-20 text-left">
          <h2 className="text-black text-xl sm:text-2xl font-bold mb-6">
            Кратка биография
          </h2>
          <div className="flex flex-row max-[948px]:flex-col justify-between">
            <div className=" text-black leading-6 sm:leading-7 md:leading-10 sm:pr-24 lg:pr-[200px] pt-7">
              <p>
                Здравейте! Казвам се Златомир Трифонов, помагам при болки в гърба, изтръпване на крайници, дискови хернии,
                дегенератативни промени, мигрена, шум в ушите, проблеми със съня, консултация при хранителни разстройства,
                съвети за хранене. Учил съм
                Рехабилитация в Медицински колеж Стара Загора в периода 2020-2023.
                Завършил съм: Специалиция в Китайска акупунктура на ухо в Sofia Acupuncture Academy - VAG System 2022.
                  Китайски Традиционен Масаж, Моксотерапия и Вендузотерапия в Стара Загора Via Vite Clinic 2021.
              </p>
                <p>
                  Практикувам от началото на обучението си с частна практика в гр. Казанлък. От 2022г. работя основно
                  в частен кабинет в гр, Пловдив, Терапевтичен център Юмейхо.
                </p>
              
            </div>
            <img
              src="../../zlatipic.jpg"
              alt="zlati"
              className=" rounded-full h-[300px] w-[250px] sm:h-[350px]"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
