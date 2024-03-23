import fs from 'fs';
import { Post } from '../models/PostsSchema.js';

export const createPost = (req,res,next) => {
    console.log(req.file);
    
    const {title, summary, content } = req.body;
    const post = new Post({title, summary, content, file: req.file.path});
    post.save()
    .then(result => {
        res.json({result} )

    })
};