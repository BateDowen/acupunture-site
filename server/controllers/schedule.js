import { Person } from "../models/PersonSchedule.js";
import { Schedule } from "../models/ScheduleSchema.js";

export const getSchedule = (req, res, next) => {
  const reqDate = req.body.date;
  Schedule.findOne({
    date: reqDate,
  })
    .then((result) => {
      console.log({ result });
      res.json({ result });
    })
    .catch((err) => {
      console.log({ err });
      res.json({ err, message: err.message });
    });
};
export const createSchedule = (req, res, next) => {
  const reqDate = req.body.date;
  const newDate = new Schedule({ date: reqDate, schedule: {} });
  // if (!req.body.user.token) {
  //   const err = new Error('Not authorized!');
  //   err.statusCode = 403;
  //   next(res.json({err, message: err.message}))
  //   throw err;

  // };
  Schedule.findOne({ date: reqDate })
    .then((date) => {
      if (date) {
        const err = new Error("Тази дата вече съществува!");
        err.statusCode = 401;
        throw err;
      }
      return newDate.save().then((result) => {
        console.log({ result });
        res.json({ result });
      });
    })
    .catch((err) => {
      console.log({ err });
      res.json({ err, message: err.message });
    });
};
export const createPersonSchedule = (req, res, next) => {
  const reqDate = req.body.date;
  const reqName = req.body.name;
  const reqShift = req.body.shift;
  console.log(reqName);
  const personsSchedule = new Person({
    date: reqDate,
    name: reqName,
    shift: reqShift,
  });
  personsSchedule
    .save()
    .then((personSch) => {
      Schedule.findOneAndUpdate(
        { date: reqDate },
        {
          $set: {
            [`schedule.${personSch.name}`]: personSch,
          },
        },
        { new: true }
      ).then((schedule) => {
        if (!schedule) {
          const err = new Error("Няма издаден график за тази дата!");
          err.statusCode = 401;
          throw err;
        }

        // if (!req.body.user.token) {
        //   const err = new Error('Not authorized!');
        //   err.statusCode = 403;
        //   next(res.json({err, message: err.message}))
        //   throw err;
        // };
        console.log(schedule);
        res.json({ schedule });
      })
      .catch((err) => {
        console.log(err);
        next(res.json({ err, message: err.message }));
      });
    })
    .catch((err) => {
      console.log(err);
      next(res.json({ err, message: err.message }));
    });
};
