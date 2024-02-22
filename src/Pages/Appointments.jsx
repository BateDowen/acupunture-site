import React, { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import { useState } from "react";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import { createDate, getDate } from "../Utils";

const Appointments = () => {
  const titleCss = "text-hoverBlue text-2xl sm:text-3xl font-bold mb-3";

  const [date, setDate] = useState(null);
  let dateToCheck
  if (date != null) {
    dateToCheck = date.getTime()
    console.log(date.getTime());
  }
 const dateTocheckAndCreate = () => {
  // TODO authorize:
  
  const response = getDate(dateToCheck)
  .then(res => {
    if (!res) {
      createDate(dateToCheck)
    }
  })
  .catch(err => {
    throw err
  })
 }
  return (
    <div className="bg-[#F5FCFC] relative pt-[100px] w-full mb-0 mx-auto text-center">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Запази час</h2>
        </div>
      </section>
      <div className="flex flex-col justify-center mx-auto">
        <div>
          <Calendar
            className="shadow-md"
            onChange={(item) => setDate(item)}
            date={date}
            minDate={new Date()}
          />
        </div>
        <div className="my-8">
          <Link to={`/hours/${dateToCheck}`} onClick={dateTocheckAndCreate} >
           <Button bg={"btn-primary"}>Виж свободни часове</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
