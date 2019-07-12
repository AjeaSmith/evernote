const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) =>{
    const header = req.get('Authorization')
    if(!header){
        req.authUser = false
        return next()
    }
    const token = header.split(' ')[1] //hjvhshvsh
    if(!token || token === ""){
        req.authUser = false
        return next()
    }else{
        const decoded = jwt.verify(token, 'powerfulSecret')
        req.authUser = true
        req.userId = decoded.userId
    }

}
module.exports = authMiddleware