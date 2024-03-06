const Prices = () => {
  const titleCss = "text-hoverBlue text-2xl sm:text-3xl font-bold mb-3";

  return (
    <div className=" bg-white relative pt-[100px] w-full mx-auto text-center">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mb-[30px] mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Цени</h2>
        </div>
      </section>
      <div className="flex justify-center mx-auto mb-8">
        <div className="flex flex-col w-[100%] md:w-[80%] items-center justify-center sm:flex-row sm:justify-between">
          <div className="bg-[#F5FCFC] m-2 p-4 sm:p-7 rounded-md w-full sm:w-[33.3%] h-full">
            <div className="sm:mt-5">
              <p className="text-center text-hoverBlue text-lg">
                Лечебен масаж{" "}
              </p>
              <p className="text-center text-base text-[#747272]">
                60лв/(50 мин)
              </p>
            </div>
          </div>
          <div className="bg-[#F5FCFC] m-2 p-4 sm:p-7 rounded-md w-full sm:w-[33.3%] h-full">
            <div className="sm:mt-5">
              <p className="text-center text-hoverBlue text-lg">
                Лечебен масаж - гръб
              </p>
              <p className="text-center text-base text-[#747272]">
                35лв/(25 мин)
              </p>
            </div>
          </div>
          <div className="bg-[#F5FCFC] m-2 p-5 sm:p-7 rounded-md w-full sm:w-[33.3%] h-full">
            <div className="sm:mt-5">
              <p className="text-center text-hoverBlue text-lg">Акупунктура </p>
              <p className="text-center text-base text-[#747272]">
                60лв/(50 мин)
              </p>
            </div>
          </div>
          <div className="bg-[#F5FCFC] m-2 p-5 sm:p-7 rounded-md w-full sm:w-[33.3%] h-full">
            <div className="sm:mt-5">
              <p className="text-center text-hoverBlue text-lg">
                Индивидуална рехабилитационна програма
              </p>
              <p className="text-center text-base text-[#747272]">
                цена след консултация
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
