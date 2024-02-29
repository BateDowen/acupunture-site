import { BookingRecord } from "../models/BookingSchema.js";
import { Hours } from "../models/Hours.js";

let availableHours = {
  first: {hour: "09:00 - 10:00", available: true, clientId: ''},
  second: {hour:"10:00 - 11:00",available: true, clientId: ''},
  third: {hour:"11:00 - 12:00",available: true, clientId: ''},
  fourth: {hour:"12:00 - 13:00",available: true, clientId: ''},
  fifth: {hour:"13:00 - 14:00",available: true, clientId: ''},
  sixth: {hour:"14:00 - 15:00",available: true, clientId: ''},
  seventh: {hour:"15:00 - 16:00",available: true, clientId: ''},
  eighth: {hour:"16:00 - 17:00",available: true, clientId: ''},
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
  console.log(newDate);
  if (!req.body.token) {
    const err = new Error('Съжаляваме, няма часове за тази дата.');
    err.statusCode = 404;
    next(res.json({err, message: err.message}))
    throw err;

  };

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



export const bookHour = (req, res, next) => {
  const date = req.body.date;
  const hourKey = req.body.hourKey;
console.log(hourKey);
  Hours.findOne({ date: date })
  .then((hour) => {
    console.log(hour.availableHours[hourKey]);
    if (!hour.availableHours[hourKey].available) {
      const error = new Error("Съжаляваме, този час не е свободен!");
      error.statusCode = 404;
      throw error;
    };
    
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
    .then(result => {
      console.log(result);
      hour.availableHours[hourKey].available = false;
      hour.availableHours[hourKey].clientId = result._id;
      
      return hour.save()
    })
    .then((result) => {
        console.log(result);
        res.status(201).json({ message: "Часът е записан!" });
      })
    })
      .catch((err) => {
        console.log(err);
        next(res.json({ err, message: err.message }));
      });
};
