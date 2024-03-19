import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import { deleteAppointmentHour, getDate } from "../Utils";
import { useLoading } from "../components/Loader/LoadingCtx";
import LoaderModal from "../components/Loader/LoaderModal";

const Admin = () => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-6";
  const unavailableCss = "cursor-not-allowed opacity-50 bg-red";
  const [availableHours, setAvailableHours] = useState(null);
  const [availableHoursKeys, setAvailableHoursKeys] = useState(null);
  const { date } = useParams();
  const user = localStorage.getItem('user')
  const navigate = useNavigate()
  const { loading, showLoader, hideLoader } = useLoading();

  console.log(availableHours);
  const deleteAppointment =(hourKey,hour) => {
      showLoader();
      deleteAppointmentHour(date,hourKey,hour,JSON.parse(user))
      .then(result => {
          console.log(result);
          fetchDate()
        })
        .catch(err => {
            console.log(err);
        });
    };
    const fetchDate = () => {
        showLoader();
        getDate(date)
          .then((result) => {
            return [result ? Object.values(result.availableHours) : null, result];
          })
          .then((result) => {
            setAvailableHours(result[0]);
            const keys = Object.keys(result[1].availableHours);
            setAvailableHoursKeys(keys);
            hideLoader();
          });

    }
  useEffect(() => {
    fetchDate()
  }, [date]);
  


  return loading ? (
    <LoaderModal />
  ) : (
    <div className="bg-lightgray relative pt-[100px] w-full mb-0 mx-auto text-center">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Запазени часове</h2>
        </div>
      </section>
      <div className="text-center flex justify-center  bg-darkwood">
        <div className="flex flex-row max-w-[650px] flex-wrap py-7 justify-around">
        
          {availableHours != null ? (
            availableHours.map((h, index) => {
              return (
                <>
                <Link
                  key={index}
                  to = {`${!h.available ? '#' : `/hours/${date}/${availableHoursKeys[index]}/${h.hour}`}`}
                  >
                  <div
                    className={`${h.available ? '' : unavailableCss} w-[300px] h-10 py-2 my-2 rounded-md bg-lightgray
                      font-bold text-darkwood
                      hover:bg-lightwood transition-all ease-linear shadow-customGray`}
                  >
                    {h.hour}
                  </div>
                </Link>
                <div key={availableHoursKeys[index]} onClick={!h.available ? () => deleteAppointment(availableHoursKeys[index],h.hour) : null}>
                  {!h.available ?<Button bg={"btn-primary"} >Освободи час</Button> : <Button bg={"btn-primary"}>Свободен</Button>}
                </div>
                </>
              );
            })
          ) : (
            
            <div className="w-full mt-6">
              <p className="text-[#ffffff] text-lg font-medium mb-3">
                Няма свободни часове за тази дата
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-darkwood w-full pb-5">
        <Link to={"/appointments"}>
          <Button bg={"btn-primary"}>Назад</Button>
        </Link>
      </div>
    </div>
  );
};

export default Admin;


