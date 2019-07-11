const notesResolver = require('./notes')
const usersResolver = require('./users')

const allResolvers = {
    ...usersResolver,
    ...notesResolver
}
module.exports = allResolvers