import React, { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import { useState } from "react";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import { demoHours } from "../Utils";

const Appointments = () => {
  const titleCss = "text-hoverBlue text-2xl sm:text-3xl font-bold mb-3";

  const [freeHours, setFreeHours] = useState(demoHours);
  const hours = localStorage.getItem('hours');

  useEffect(() => {
    if (!hours) {
    localStorage.setItem('hours',JSON.stringify(freeHours))
    console.log('after useef ');
    console.log(freeHours);
    } else {
      // setFreeHours(JSON.parse(localStorage.getItem('hours')));
      console.log(freeHours);

    }
  },[]);

  const [date, setDate] = useState(null);
  let dateToCheck
  if (date != null) {
    dateToCheck = date.getTime()
      console.log(date.getTime());
  }
  // TODO async function 
  const sendDate = (e) => {
  const hours = freeHours;

    if (!hours[dateToCheck]) {
      hours[dateToCheck] = {}
    }
    hours[dateToCheck].availableHours = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",]
    console.log('in the func ');
    const options = {
      method: 'GET',
      headers: {
        'Content-type' : 'application/json'
      },
      // body : JSON.stringify(dateToCheck)
    }
    // const resp = fetch(`http://localhost:3030/hours/${dateToCheck}`, options )
    // .then(result => {
    //   return result.json();
    // }).then(result => {
    //   console.log(result);
    // })

    localStorage.setItem('hours',JSON.stringify(hours))

    console.log(localStorage.getItem('hours',JSON.stringify(hours)));
    setFreeHours(hours)
      console.log(hours);
  };
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
          <Link to={`/hours/${dateToCheck}`} onClick={sendDate}>
           <Button bg={"btn-primary"}>Виж свободни часове</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
