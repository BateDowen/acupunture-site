import express from "express";
import { createPersonSchedule, createSchedule, getSchedule } from "../controllers/schedule.js";
const scheduleRouter = express.Router();

scheduleRouter.get("/getSchedule", getSchedule);
scheduleRouter.post("/createSchedule", createSchedule);
scheduleRouter.post("/createPersonSchedule", createPersonSchedule);

export default scheduleRouter;
