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
            Кратка история
          </h2>
          <div className="flex flex-row max-[948px]:flex-col justify-between">
            <div className=" text-black leading-6 sm:leading-7 md:leading-10 sm:pr-24 lg:pr-[200px] pt-7">
              <p>
                Работата ми е базирана в използването на няколко методики за
                справяне с хронична болка, травми и различни състояния на тялото
                . Лечебният масаж е в основата на първи избор, съчетан с
                акупунктура ( иглотерапия) и вендузотерапия. Завършено
                образовние и курсове:
              </p>
              <div className="pl-4">
                <ul className="list-disc">
                  <li>
                    Пеофесионален бакалвър – Медицински колеж Стара Загора
                    Традиционен Китайски масаж към ViaVite center of
                    acupuncture.
                  </li>
                  <li>
                    Моксотерапия към ViaVite center of acupuncture Vag Sistem(
                    auriculotherapy, vacuum therapy, gua-sha) към Sofia
                    Acupuncture Physio accredited by College of Acupuncture West
                    London UK
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="../../../public/zlati.png"
              alt="zlati"
              className="h-[300px] w-[250px] sm:h-[350px]"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
