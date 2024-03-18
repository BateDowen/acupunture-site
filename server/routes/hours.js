import express from "express";
import {bookHour, createDate, deleteAppointment, getDate} from '../controllers/hours.js'
const hourRouter = express.Router();

hourRouter.post("/book",bookHour)
hourRouter.get("/:date", getDate);
hourRouter.post("/:date", createDate);
hourRouter.post("/delete/:date", deleteAppointment)
export default hourRouter;
