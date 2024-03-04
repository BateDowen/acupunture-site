import React, { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import { useState } from "react";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { createDate, getDate } from "../Utils";

const Appointments = () => {
  const titleCss = "text-hoverBlue text-2xl sm:text-3xl font-bold mb-3";

  const [date, setDate] = useState(null);
  const user = localStorage.getItem("user");
  const [err, setErr] = useState('');
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  let dateToCheck;
  if (date != null) {
    dateToCheck = date.getTime();
    console.log(date.getTime());
  }

  const createHours = () => {
    createDate(dateToCheck, JSON.parse(user))
    .then((result) => {
        console.log(result);
        if (result.err) {
          setErr(result.message);
          setIsShown(true);
        }else {
          setErr("");
          setIsShown(false);
          console.log(result);
          navigate(`/hours/${result.result.date}`);

        }
    })
    .catch((err) => {
      setErr(err.message);
      setIsShown(true)
    });
  }
  const dateTocheck = () => {
    getDate(dateToCheck)
      .then(result =>{
        console.log(result);
        if (result.err) {
          setErr(result.message);
          setIsShown(true);
        } else {
          setErr("");
          setIsShown(false);
          navigate(`/hours/${result.date}`);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setErr(err.message);
        setIsShown(true)
        // throw err;
      });
  };
  const goBackHandler = () => {
    setErr("");
    setIsShown(false);
  };
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) or Saturday (6)
  };
  return (
    <div className="bg-[#F5FCFC] relative pt-[100px] w-full mb-0 mx-auto text-center">
      {isShown ? (
        <div className="mt-[120px] h-[300px]">
          <p>{err}</p>
          <div className="pt-10" onClick={goBackHandler}>
            <Button bg={"btn-primary"}>Назад</Button>
          </div>
        </div>
      ) : (
        <>
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
                disabledDay={date => isWeekend(date)}
              />
            </div>
            <div className="my-8">
              <div onClick={user? createHours : dateTocheck}>
                <Button bg={"btn-primary"}>{user ? 'Създай часове' : 'Виж свободни часове'}</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Appointments;
