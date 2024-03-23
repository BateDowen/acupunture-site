import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import hourRouter from "./routes/hours.js";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads'); // Destination directory for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use original file name for storage
    }
  })
  
  dotenv.config();
  const app = express();
  const port = process.env.PORT || 3030;
  app.use(bodyParser.json())
  app.use(express.urlencoded({ extended: true }));
  app.use(multer({storage: storage}).single('file'));
  app.use((req,res,next) => {
      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
      next()
    });
    
// app.post('/posts/create-post',upload.single('file'), (req,res,next) => {
//     console.log(req.body);
// })

app.use('/hours', hourRouter);
app.use('/auth',authRouter);
app.use('/posts', postRouter);



const connect = async () => {
    try {
      await  mongoose.connect(process.env.MONGO);
      console.log('Connect to mongo');
    } catch (error) {
        throw error
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('Mongo disconnected');
});

mongoose.connection.on('connected', () => {
    console.log('Mongo connected');
});

app.listen(port, '0.0.0.0', () => {
    connect()
    console.log(`Server is listening to ${port}...`)

});
