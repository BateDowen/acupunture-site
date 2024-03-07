import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import { getDate } from "../Utils";
import { useLoading } from "../components/Loader/LoadingCtx";
import LoaderModal from "../components/Loader/LoaderModal";

const AvailableHours = () => {
  const titleCss = "text-black text-2xl sm:text-3xl font-bold mb-6";
  const unavailableCss = "cursor-not-allowed opacity-50 bg-red";
  const [availableHours, setAvailableHours] = useState(null);
  const [availableHoursKeys, setAvailableHoursKeys] = useState(null);
  const { date } = useParams();
  const { loading, showLoader, hideLoader } = useLoading();

  useEffect(() => {
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
  }, [date]);

  return loading ? (
    <LoaderModal />
  ) : (
    <div className="bg-lightgray relative pt-[100px] w-full mb-0 mx-auto text-center">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Свободни часове</h2>
        </div>
      </section>
      <div className="text-center flex justify-center h-[600px] bg-darkwood">
        <div className="flex flex-col md:flex-row max-w-[650px] flex-wrap py-7 justify-around">
        
          {availableHours != null ? (
            availableHours.map((h, index) => {
              return (
                <Link
                  key={index}
                  to = {`${!h.available ? '#' : `/hours/${date}/${availableHoursKeys[index]}/${h.hour}`}`}
                >
                  <div
                    className={`${h.available ? '' : unavailableCss} w-[300px] h-10 py-2 rounded-md bg-lightgray
                      font-bold text-darkwood
                      hover:bg-lightwood transition-all ease-linear shadow-customGray`}
                  >
                    {h.hour}
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

export default AvailableHours;
