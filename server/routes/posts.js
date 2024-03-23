import express from "express";
import { createPost, getPosts, getSingePost, updatePost } from "../controllers/posts.js";
import { isAdmin } from "../middlewares/auth.js";

const postRouter = express.Router();

postRouter.post('/create-post',isAdmin, createPost);
postRouter.put('/update-post',isAdmin, updatePost);
postRouter.get('/', getPosts);
postRouter.get('/:id', getSingePost);


export default postRouter;