export const isAdmin = (req,res,next) =>{
    const user = req.body.user ? req.body.user : undefined;
    console.log(req.body);
    if (user) {
        console.log('fewfqew');
        if (user.name == 'Zlati' && user.role == 'admin') {
            return next()
        } else {
            res.status(403).json({message: 'Unauthorized!'})
            
        }
    } else {
        res.json({message: 'Unauthorized!'})
    }
}