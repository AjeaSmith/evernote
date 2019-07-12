const { buildSchema } = require("graphql");
const ourSchema = buildSchema(`
  type Query {
    notes: [Note]
    note(_id: ID): Note
    login(email: String, password: String) : AuthData
  }
  type Note{
    _id: ID
    title: String
    content: String
    image: String
    userCreator: User!
  }
  type User{
    _id: ID
    username: String
    email: String
    password: String
    createdNotes: [Note]
  }
  type AuthData{
    userId: ID!
    token: String
    email: String
  }
  input noteinput{
    title: String
    content: String
    image: String
  }
  input userinput{
    username: String,
    email: String
    password: String
  }
  type Mutation {
    createUser(userInput: userinput): User!
    createNote(noteInput: noteinput): Note!
    deleteNote(_id: ID): Note
  }
`);
module.exports = {
  ourSchema
};
