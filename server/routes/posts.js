import express from "express";
import { createPost, deletePost, getPosts, getSingePost, updatePost, writeEmail } from "../controllers/posts.js";
import { isAdmin } from "../middlewares/auth.js";

const postRouter = express.Router();

postRouter.post('/create-post', createPost);
postRouter.put('/update-post', updatePost);
postRouter.get('/', getPosts);
postRouter.get('/:id', getSingePost);
postRouter.post('/delete/:id', isAdmin, deletePost);
postRouter.post('/write-email', writeEmail);


export default postRouter;