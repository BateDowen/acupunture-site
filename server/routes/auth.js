import express from "express";
import { login } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post('/signIn', login);


export default authRouter;
