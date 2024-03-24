import fs from 'fs';
import { Post } from '../models/PostsSchema.js';

export const createPost = (req,res,next) => {
    const {title,  content } = req.body;
    const post = new Post({title, content, file: req.file.path});
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
    const {title,content, id } = req.body;
    console.log(req.file);
    Post.findById(id)
    .then(post => {
        if (!post) {
            const err = new Error('Could not find post');
            err.ststusCode = 404;
            throw err;
        };
        post.title = title;
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

};
export const getPosts = (req,res,next) => {
    const currentPage = req.query.page || 1;
    const perPage = 4;
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
     .catch((err) => {
        console.log({ err });
        res.json({err, message: err.message});
      });
};
export const getSingePost = (req,res,next) => {
    const { id } = req.params;
    Post.findById(id)
    .then(post =>{
        res.status(200).json(post)
    })
    .catch((err) => {
        console.log({ err });
        res.json({err, message: err.message});
    });
};
export const deletePost = (req,res,next) => {
    const { id } = req.params;
    Post.findByIdAndDelete(id)
    .then(result => {
        if (!result) {
            const err = new Error('Could not find post');
            err.ststusCode = 404;
            throw err;
        };
        res.json({message: "Постът е изтрит!"})
    })
    .catch((err) => {
        console.log({ err });
        res.json({err, message: err.message});
    });
};