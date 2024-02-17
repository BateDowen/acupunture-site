import express from "express";
import {createDate, getDate} from '../controllers/hours.js'
const hourRouter = express.Router();

hourRouter.get("/:date", getDate);
hourRouter.post("/:date", createDate );

export default hourRouter;
