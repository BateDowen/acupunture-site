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
    .catch((err) => {
        console.log({ err });
        res.json({err, message: err.message});
      });
};
export const updatePost = (req,res,next) => {
    const {title, summary, content, id } = req.body;
    Post.findById(id)
    .then(post => {
        if (!post) {
            const err = new Error('Could not find post');
            err.ststusCode = 404;
            throw err;
        };
        post.title = title;
        post.summary = summary;
        post.content = content;
        post.file = req.file.path;
        return post.save()
    })
    .then(result => {
        res.json({result})
    })
    .catch((err) => {
        console.log({ err });
        res.json({err, message: err.message});
      });

    console.log(req);
};
export const getPosts = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 2;
    let totalItems;

    Post.find()
    .countDocuments()
    .then(count =>{
     totalItems = count;
     return Post.find()
     .skip((currentPage - 1)* perPage)
     .limit(perPage);
    })
     .then(posts =>{
         res.status(200)
         .json({message: 'Post fetched successfuly', posts: posts, totalItems: totalItems});
 
     })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
};
export const getSingePost = (req,res,next) => {
    const { id } = req.params;
    Post.findById(id)
    .then(post =>{
        res.status(200).json(post)
    })
};