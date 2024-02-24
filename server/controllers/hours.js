import { BookingRecord } from "../models/BookingSchema.js";
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
      res.status(200).json(result);
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
export const bookHour = (req, res, next) => {
  const date = req.body.date;
  const hourKey = req.body.hourKey;

  Hours.findOne({ date: date })
  .then((hour) => {
    if (!hour.availableHours[hourKey]) {
      const error = new Error("Съжаляваме, този час не е свободен!");
      error.statusCode = 404;
      throw error;
    }
    const booking = new BookingRecord({
      bookingDate: req.body.date,
      hour: req.body.hour,
      hourKey: req.body.hourKey,
      firstName: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
    });
    return booking
    .save()
    .then((result) => {
      // console.log(result);
      const newHours = { ...availableHours };
      delete newHours[req.body.hourKey];
      console.log(availableHours);
      console.log(newHours);
      Hours.findOneAndUpdate(
        { date: req.body.date },
        { availableHours: newHours },
        { new: true }
        ).exec();
        
        res.status(201).json({ message: "Часът е записан!" });
      })
    })
      .catch((err) => {
        console.log(err);
        next(res.json({ err, message: err.message }));
      });
};
