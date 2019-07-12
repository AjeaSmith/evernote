const Note = require('../models/notes')
const User = require('../models/users')

const getUser = async(userid) =>{
  try {
    const userID = await User.findById(userid)
    if(userID) return {...userID._doc, createdNotes: getNotes(userID._doc.createdNotes)}
  }catch(err){
    throw err
  }
}
const getNotes = async(noteid) =>{
  try{
    const notesID = await Note.find({_id: {$in: noteid}})
    return notesID.map(note =>{
      return {...note._doc}
    })
  }catch(err){
    throw err
  }
}
module.exports = {
  notes: async () =>{
    try {
      const Notes = await Note.find({})
      return Notes.map(note =>{
        return {...note._doc, userCreator: getUser(note._doc.userCreator)}
      })
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
  deleteNote: async({_id}, req) =>{
    if(!req.authUser){
      throw new Error("Not Authorized")
    }
        try {
          const note = await Note.findByIdAndRemove({_id: _id})
          return {...note._doc}
        }catch(err){
          throw err
        }
  },
  createNote: async ({noteInput}, req) =>{
    if(!req.authUser){
      throw new Error("Not Authorized")
    }
   const note = new Note({
     title: noteInput.title,
     content: noteInput.content,
     image: noteInput.image,
     userCreator: req.userId
   })
   let notes;
   try {
     // saving and return notes
     const result = await note.save()
     notes = {
       ...result._doc,
       userCreator: getUser(result._doc.userCreator)
     }
     const findUser = await User.findById(req.userId)
     if(!findUser) return new Error('User not found')
     findUser.createdNotes.push(note)
     await findUser.save()
     return notes
   }catch (err){
     throw err
   }
  }
}