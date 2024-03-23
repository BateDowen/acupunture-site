import express from "express";
import { createPost } from "../controllers/posts.js";
import { isAdmin } from "../middlewares/auth.js";

const postRouter = express.Router();

postRouter.post('/create-post',isAdmin, createPost);


export default postRouter;