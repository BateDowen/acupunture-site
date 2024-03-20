export const isAdmin = (req,res,next) =>{
    console.log(req.body);
    if (req.body.user.name == 'Zlati' && req.body.user.role == 'admin') {
       return next()
    } else {
        res.status(403).json({message: 'Unauthorized!'})

    }
}