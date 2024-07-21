import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import hourRouter from "./routes/hours.js";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";
import multer from "multer";
import path from 'path';
import scheduleRouter from "./routes/schedule.js";

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
  console.log(process.cwd());
  app.use('/uploads',express.static(path.join(process.cwd(), 'uploads')));
  app.use(express.urlencoded({ extended: true }));
  app.use(multer({storage: storage}).single('file'));
  app.use((req,res,next) => {
      res.setHeader('Access-Control-Allow-Origin','*');
      res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
      res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
      next()
    });
    
app.use('/hours', hourRouter);
app.use('/auth',authRouter);
app.use('/posts', postRouter);
app.use('/schedule', scheduleRouter)



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
