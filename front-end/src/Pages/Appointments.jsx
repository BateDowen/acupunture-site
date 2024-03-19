import React, { useEffect } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Calendar } from "react-date-range";
import { useState } from "react";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { createDate, getDate } from "../Utils";
import { useLoading } from "../components/Loader/LoadingCtx";
import LoaderModal from "../components/Loader/LoaderModal";

const Appointments = () => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-3";

  const [date, setDate] = useState(null);
  const user = localStorage.getItem("user");
  const [err, setErr] = useState('');
  const [isShown, setIsShown] = useState(false);
  const { loading, showLoader, hideLoader } = useLoading();

  const navigate = useNavigate();

  let dateToCheck;
  if (date != null) {
    dateToCheck = date.getTime();
    console.log(date.getTime());
  }

  const createHours = () => {
    showLoader()
    createDate(dateToCheck, JSON.parse(user))
    .then((result) => {
        console.log(result);
        if (result.err) {
          setErr(result.message);
          setIsShown(true);
          hideLoader()
        }else {
          setErr("");
          setIsShown(false);
          console.log(result);
          navigate(`/hours/${result.result.date}`);
          hideLoader()
        }
    })
    .catch((err) => {
      setErr(err.message);
      setIsShown(true)
    });
  }
  const dateTocheck = () => {
    showLoader()
    getDate(dateToCheck)
      .then(result =>{
        console.log(result);
        if (result.err) {
          setErr(result.message);
          setIsShown(true);
          hideLoader()
        } else {
          setErr("");
          setIsShown(false);
          navigate(`/hours/${result.date}`);
          hideLoader()

        }
      })
      .catch((err) => {
        console.log(err.message);
        setErr(err.message);
        setIsShown(true)
        // throw err;
      });
  };
  const adminDateToCheck = () => {
    showLoader()
    getDate(dateToCheck)
      .then(result =>{
        console.log(result);
        if (result.err) {
          setErr(result.message);
          setIsShown(true);
          hideLoader()
        } else {
          setErr("");
          setIsShown(false);
          navigate(`/admin/${result.date}`);
          hideLoader()

        }
      })
      .catch((err) => {
        console.log(err.message);
        setErr(err.message);
        setIsShown(true)
        // throw err;
      });
  }
  const goBackHandler = () => {
    setErr("");
    setIsShown(false);
  };
  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) or Saturday (6)
  };
  return (
    loading ? <LoaderModal /> :
    <div className="bg-lightgray relative pt-[100px] w-full mb-0 mx-auto text-center">

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
            <div className="">
              <Calendar
                className="bg-white p-3 rounded-md shadow-md "
                onChange={(item) => setDate(item)}
                date={date}
                minDate={new Date()}
                disabledDay={date => isWeekend(date)}
              />
            </div>
            <div className="my-8 flex justify-center">
              <div className="m-2" onClick={user? createHours : dateTocheck}>
                <Button bg={"btn-primary"}>{user ? 'Създай часове' : 'Виж свободни часове'}</Button>
              </div>
              {user ?
              <div className="m-2" onClick={adminDateToCheck}>
               <Button bg={"btn-primary"}>Виж заети часове</Button>
              </div> : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Appointments;
