import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export const login = (req,res,next) => {
    const {
        name,
        password
    } = req.body;
    let loadedUser
    console.log(name);
    User.findOne({name})
    .then(user => {
        if (!user) {
            const error = new Error('User not found!');
            error.statusCode = 401;
            throw error;
        };
        loadedUser = user
        return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
        if (!isEqual) {
            const error = new Error('Wrong username or password!');
            error.statusCode = 401;
            throw error;
        };

        const token = jwt.sign({
            name: loadedUser.name,
            userId: loadedUser._id.toString()
        },process.env.SECRET,{
            expiresIn: '1h'
        });
        res.status(200).json({token: token, userId:loadedUser._id.toString(), name:loadedUser.name})
    })
    .catch(err =>{
        console.log(err);
        if (!err.statusCode) {
            err.statusCode = 500
        }
        next(res.json({ err, message: err.message }));
    });
}