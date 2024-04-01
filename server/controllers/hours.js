import { BookingRecord } from "../models/BookingSchema.js";
import { Hours } from "../models/Hours.js";
import { sendEmail } from "../sendEmail/sendEmail.js";

let availableHours = {
  first: {hour: "08:00 - 09:00", available: true, clientId: null},
  second: {hour:"09:00 - 10:00",available: true, clientId: null},
  third: {hour:"10:00 - 11:00",available: true, clientId: null},
  fourth: {hour:"11:00 - 12:00",available: true, clientId: null},
  fifth: {hour:"12:00 - 13:00",available: true, clientId: null},
  sixth: {hour:"13:00 - 14:00",available: false, clientId: null},
  seventh: {hour:"14:00 - 15:00",available: false, clientId: null},
  eighth: {hour:"15:00 - 16:00",available: false, clientId: null},
  ningth: {hour:"16:00 - 17:00",available: false, clientId: null},
  tenth: {hour:"17:00 - 18:00",available: false, clientId: null},
  eleventh: {hour:"18:00 - 19:00",available: false, clientId: null},
};
export const getDate = (req, res, next) => {
  const reqDate = req.params.date;

  Hours.findOne({
    date: reqDate,
  })
    .then((result) => {
      console.log(result);
      if (!result) {
        const err = new Error('Съжаляваме, няма часове за тази дата.');
        err.statusCode = 404;
        throw err;
    
      };
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log({ err });
      res.json({err, message: err.message});
    });
};

export const createDate = (req, res, next) => {
  const reqDate = req.params.date;
  const newDate = new Hours({ date: reqDate, availableHours });
  console.log(req.body);
  if (!req.body.user.token) {
    const err = new Error('Not authorized!');
    err.statusCode = 403;
    next(res.json({err, message: err.message}))
    throw err;

  };
  Hours.findOne({date: reqDate})
  .then(date => {
    if (date) {
      const err = new Error('Тази дата вече съществува!');
      err.statusCode = 401;
      throw err;
    };
    return newDate
      .save()
      .then((result) => {
        console.log({ result });
        res.json({ result });
    })
  })
  .catch((err) => {
    console.log({ err });
    res.json({err, message: err.message});
  });
};

export const deleteAppointment = (req,res,next) => {
  const date = req.body.date;
  const hourKey = req.body.hourKey;
  if (!req.body.user) {
    const err = new Error('Not authorized!');
    err.statusCode = 403;
    next(res.json({err, message: err.message}))
    throw err;
  }
  Hours.findOne({date: date})
  .then(hour => {
    hour.availableHours[hourKey].available = true;
    hour.availableHours[hourKey].clientId = null;
    
    sendEmail(`${req.body.hour} е свободен`, "Отменен час")
    return hour.save()
  })
  .then((result) => {
    res.status(201).json({ message: "Часът е отменен." });
  })
  .catch(err => {
    console.log({ err });
    res.json({err, message: err.message});
  })
};

export const bookHour = (req, res, next) => {
  const date = req.body.date;
  const hourKey = req.body.hourKey;
  Hours.findOne({ date: date })
  .then((hour) => {
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
      hour.availableHours[hourKey].available = false;
      hour.availableHours[hourKey].clientId = result._id;
      sendEmail(`Име: ${req.body.name}, Тел: ${req.body.phone}, Час: ${req.body.hour}`,"Запазен час")
      
      return hour.save()
    })
    .then((result) => {
        res.status(201).json({ message: "Часът е записан!" });
      })
    })
      .catch((err) => {
        console.log(err);
        next(res.json({ err, message: err.message }));
      });
};
