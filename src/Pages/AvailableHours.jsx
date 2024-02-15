import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const AvailableHours = () => {
  const titleCss = "text-hoverBlue text-2xl sm:text-3xl font-bold mb-6";

  const { date } = useParams();
  const demoHours = [
    {
      id: "1",
      1707948000000: {
        availableHours: [1, 2, 3, 4, 5, 6],
      },
    },
    {
      id: "2",
      1708034400000: {
        availableHours: [7, 8, 9, 10, 11, 12],
      },
    },
    {
      id: "3",
      1708120800000: {
        availableHours: [13, 14, 15, 16, 17, 18],
      },
    },
  ];
  const availableHours = demoHours.find((d) => d[date])[date].availableHours;

  availableHours.map((h) => console.log(h));
  return (
    <div className="bg-[#F5FCFC] relative pt-[100px] w-full mb-0 mx-auto text-center">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Свободни часове</h2>
        </div>
      </section>
      <div className="text-center flex justify-center h-[400px] bg-hoverBlue">
        <div className="flex flex-col w-[300px] py-7 justify-between">
          {availableHours.map((h) => {
            return (
              <div className="w-full h-10 py-2 rounded-md bg-[#F5FCFC]
               font-bold text-hoverBlue hover:text-[#ffffff]
               hover:bg-lightBlue transition-all ease-linear shadow-customGray">
                {h}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvailableHours;
