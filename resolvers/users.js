// Create user resolver
const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = {
    createUser: async({userInput}) =>{
      try {
        const findUser = await User.findOne({email: userInput.email})
        if(findUser){
          return new Error('User already exists')
        }
        const hashedPassword = await bcrypt.hash(userInput.password, 12)
        const user = new User({
          username: userInput.username,
          email: userInput.email,
          password: hashedPassword
        })
        const result = await user.save()
        return {...result._doc, password: null}
      }catch(err){
        throw err
      }
    },
    login: async({email, password}) =>{
      try {
        const findUser = await User.findOne({email: email}) 
        if(!findUser){
          return new Error("User not found")
        }
        const matchPassword = await bcrypt.compare(password, findUser.password)
        if(!matchPassword){
          return new Error("user not found")
        }
        const token = jwt.sign({userId: findUser._id, email: findUser.email}, 'powerfulSecret')
        return {
          userId: findUser._id,
          email: findUser.email,
          token: token
        }
      }catch(err){
        throw err;
      }
    }
}