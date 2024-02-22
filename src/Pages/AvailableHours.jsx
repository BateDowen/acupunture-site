import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import { getDate } from "../Utils";

const AvailableHours =  () => {
  const titleCss = "text-hoverBlue text-2xl sm:text-3xl font-bold mb-6";
  const [availableHours,setAvailableHours] = useState(null)
  const [availableHoursKeys,setAvailableHoursKeys] = useState(null)
  const { date } = useParams();

  useEffect(() => {
    const response = getDate(date)
    .then(result => {
      return [result ? Object.values(result.availableHours) : null, result];
    })
    .then(result =>{
      const keys = Object.keys(result[1].availableHours)
      setAvailableHoursKeys(keys)
      setAvailableHours(result[0])
    })
    
  },[date])
  // TODO loading...

    return (
    <div className="bg-[#F5FCFC] relative pt-[100px] w-full mb-0 mx-auto text-center">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Свободни часове</h2>
        </div>
      </section>
      <div className="text-center flex justify-center h-[600px] bg-hoverBlue">
          <div className="flex flex-col md:flex-row max-w-[650px] flex-wrap py-7 justify-around">
          {
            availableHours != null ? (
                availableHours.map((h,index) => {
      // console.log(availableHoursKeys[index]);
                 
                  return (
                    <Link key={h} to={`/hours/${date}/${availableHoursKeys[index]}/${h}`}>
                      <div
                      
                      className="w-[300px] h-10 py-2 rounded-md bg-[#F5FCFC]
                      font-bold text-hoverBlue hover:text-[#ffffff]
                      hover:bg-lightBlue transition-all ease-linear shadow-customGray"
                      >
                      {h}
                      </div>
                    </Link>
                );
              })
              ) : (
              <div className="w-full mt-6">
                <p className="text-[#ffffff] text-lg font-medium mb-3">
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
