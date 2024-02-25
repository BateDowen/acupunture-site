export const isAdmin = (req,res,next) =>{
    if (req.user == 'Zlati' && req.user.role == 'admin') {
       return next()
    };
    res.status(403).json({message: 'Unauthorized!'})
}