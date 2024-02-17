import { id } from "date-fns/locale";
import { Hours } from "../models/Hours.js";

let availableHours = {
  first: "09:00 - 10:00",
  second: "10:00 - 11:00",
  third: "11:00 - 12:00",
  fourth: "12:00 - 13:00",
  fifth: "13:00 - 13:00",
  sixth: "14:00 - 15:00",
  seventh: "15:00 - 16:00",
  eighth: "16:00 - 17:00",
};
export const getDate = (req, res, next) => {
  const reqDate = req.params.date;

  Hours.findOne({
    date: reqDate,
  })
    .then((result) => {
        res.status(200).json(result)
    })
    .catch((err) => {
      console.log({ err });
      res.json(err);
    });
};
export const createDate = (req, res, next) => {
  const reqDate = req.params.date;
  const newDate = new Hours({ date: reqDate, availableHours });

  return newDate
    .save()
    .then((result) => {
      console.log({ result });
      res.json({ result });
    })
    .catch((err) => {
      console.log({ err });
      res.json(err);
    });
};

export const updateDate = (req, res, next) => {
  Hours.findOne({
    date: reqDate,
  }).then((result) => {
    console.log({ result });
    if (!result) {
      result.date = result.availableHours = availableHours;
      return result.save();
    }
  });
};
