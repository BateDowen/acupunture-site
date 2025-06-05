const Prices = ({ inHomePage }) => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";

  const services = [
    {
      title: "Астро-психологична консултация",
      description:
        "Астро-психологична консултация по заложена тема. Подходяща за: психо-емоционални състояния, физически състояния, себепознание, личностно развитие. Включва: разплитане на заложения въпрос чрез анализа на астрологични влияния, психологически техники, техники на активно въображение (разговор с архетипи).",
      price: "60мин. онлайн видеоразговор (40 евро / 79 лева)",
    },
    {
      title: "Пакет от 3 Астропсихологични сесии",
      description: "",
      price: "100 евро / 199 лева",
    },
   
    {
      title: "Цялостен, Интердисциплинарен анализ на Хороскоп",
      description:
        "6-8 стр. PDF в рамките на 3-5 работни дни. Включва пълен анализ на всички астрологични влияния (планети в знаци, домове, аспекти). Информация от няколко направления: Астрология, Космоенергетика, Рейки, Йога. Анализ на таланти, ресурси, страхове, потенциали, пътят на душата, мисия, насоки. Отговор на един въпрос по избор.",
      price: "75 евро / 149 лева",
    },
  ];

  return (
    <div
      className={`bg-white relative ${
        inHomePage ? "pt-0" : "pt-[100px]"
      } w-full px-5 mx-auto text-center`}
    >
      <section className="flex flex-row w-full justify-around mt-[120px]">
        <div className="flex flex-col w-full mb-[30px] mx-12">
          <h2 className={`w-full text-[#82a490] uppercase ${titleCss}`}>
            Услуги
          </h2>
        </div>
      </section>
      <div className="flex justify-center mx-auto mb-8">
        <div className="flex flex-wrap gap-4 w-full  justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-lightgray flex-1 min-w-[250px] max-w-[320px] min-h-[350px] p-5 sm:p-7 rounded-md flex flex-col justify-between"
            >
              <div className="sm:mt-5">
                <p className="text-center text-[#82a490] text-lg font-semibold mb-3">
                  {service.title}
                </p>
                {service.description && (
                  <p className="text-center text-[#82a490] text-sm mb-3">
                    {service.description}
                  </p>
                )}
                <p className="text-center text-base text-[#747272]">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
