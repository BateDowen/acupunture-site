import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import hourRouter from "./routes/hours.js";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.js";

const app = express();
const port = process.env.PORT || 3030;
dotenv.config();
app.use(bodyParser.json())

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next()
})
app.use('/hours', hourRouter);
app.use('/auth',authRouter)

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
