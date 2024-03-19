import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "../components/Form/Form";
import Button from "../components/Button/Button";
import { bookHour } from "../Utils";
import { useLoading } from "../components/Loader/LoadingCtx";
import LoaderModal from "../components/Loader/LoaderModal";

const BookHour = () => {
  const user = localStorage.getItem("user");
  const { date, hour, hourKey } = useParams();
  const { loading, showLoader, hideLoader } = useLoading();
  const [responce, setResponce] = useState(null);
  const titleCss =
    "text-black text-center text-2xl sm:text-3xl font-bold mb-3";
  const onSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let { email, name, phone } = Object.fromEntries(formData);
    showLoader();
    bookHour(email, name, phone, date, hour, hourKey)
      .then((result) => {
        if (result.err) {
        setResponce(result.message);

        }
        console.log(result);
        setResponce(result.message);
        hideLoader();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return loading ? (
    <LoaderModal />
  ) : (
    <div className=" bg-lightgray relative pt-[100px] w-full mx-auto text-left">
      <section className="flex flex-row w-full justify-around mt-[120px] ">
        <div className={` flex flex-col w-full mb-[30px] mx-12`}>
          <h2 className={`w-full uppercase ${titleCss} `}>Запази час</h2>
        </div>
      </section>
      <div className="text-center flex justify-center h-[550px] bg-darkwood">
        <div className="mx-auto py-5 w-full">
          <div className="my-5">
            <Button bg={"btn-primary"}>{hour}</Button>
          </div>
          {responce == null ? (
            <>
              <Form onSubmit={onSubmit} btnText="Запази" />
            </>
          ) : (
            <p className="text-white">{responce}</p>
          )}
          <div className="my-8">
            <Link to={user ? `/admin/${date}`: `/hours/${date}`}>
              <Button bg={"btn-primary"}>Назад</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHour;
