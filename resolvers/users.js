// Create user resolver
const User = require('../models/users')
module.exports = {
    createUser: async({userInput}) =>{
      const user = new User({
        username: userInput.username,
        email: userInput.email,
        password: userInput.password
      })
      try {
        const result = await user.save()
        return {...result._doc}
      }catch(err){
        throw err;
      }
    }
}