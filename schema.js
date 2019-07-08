const { buildSchema } = require("graphql");
const Note = require('./models/notes')
const ourSchema = buildSchema(`
  type Query {
    notes: [Note]
    note(_id: ID): Note
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
const resolver = {
  notes: async () =>{
    try {
      const Notes = await Note.find((err, notes) =>{
        if(err) return err
        return notes
      })
      return Notes
    }catch(err){
      throw err
    }
  },
  note: async ({_id}) =>{
  try{
    const findNote = await Note.findById(_id)
    return {
      ...findNote._doc
    }
  }catch(err){
    throw err
  }
},
  deleteNote: async({_id}) =>{
    try {
      const note = await Note.findByIdAndRemove({_id: _id})
      return {...note._doc}
    }catch(err){
      throw err
    }
  },
  createNote: async ({noteInput}) =>{
    const note = new Note({
      title: noteInput.title,
      content: noteInput.content,
      image: noteInput.image
    })
    let notes;
    try {
      const result = await note.save()
      notes = {
        ...result._doc
      }
      return notes
    }catch (err){
      throw err
    }
  }
};

module.exports = {
  ourSchema,
  resolver
};
