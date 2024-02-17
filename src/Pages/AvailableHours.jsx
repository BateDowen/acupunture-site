import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import { getDate } from "../Utils";

const AvailableHours =  () => {
  const titleCss = "text-hoverBlue text-2xl sm:text-3xl font-bold mb-6";
  const [info,setInfo] = useState([])
  const { date } = useParams();

  const response = getDate(date)
  .then(result => {
    return Object.values(result.availableHours);
  })
  .then(result =>{
    setInfo(result)
  })
  // TODO loading...
    return (
    <div className="bg-[#F5FCFC] relative pt-[100px] w-full mb-0 mx-auto text-center">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Свободни часове</h2>
        </div>
      </section>
      <div className="text-center flex justify-center h-[600px] bg-hoverBlue">
        <div className="flex flex-col w-[300px] py-7 justify-between">
          {
            info.length > 0 ? (
                info.map((h) => {
              return (
                  <div
                    key={h}
                    className="w-full h-10 py-2 rounded-md bg-[#F5FCFC]
                       font-bold text-hoverBlue hover:text-[#ffffff]
                       hover:bg-lightBlue transition-all ease-linear shadow-customGray"
                  >
                    {h}
                  </div>
                );
            })
          ) : (
              <div>
                <p className="text-[#ffffff] font-medium mb-3">
                  Няма свободни часове за тази дата
                </p>
              </div>
            )}
            <Link to={"/appointments"}>
              <Button bg={"btn-primary"}>Назад</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
export default AvailableHours;
