import express from "express";
import {bookHour, createDate, deleteAppointment, getDate} from '../controllers/hours.js'
import { isAdmin } from "../middlewares/auth.js";
const hourRouter = express.Router();

hourRouter.post("/book",bookHour)
hourRouter.get("/:date", getDate);
hourRouter.post("/:date",isAdmin, createDate);
hourRouter.post("/delete/:date",isAdmin, deleteAppointment)
export default hourRouter;
