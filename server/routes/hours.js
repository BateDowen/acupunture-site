import express from "express";
import {bookHour, createDate, getDate} from '../controllers/hours.js'
const hourRouter = express.Router();

hourRouter.post("/book",bookHour)
hourRouter.get("/:date", getDate);
hourRouter.post("/:date", createDate);

export default hourRouter;
