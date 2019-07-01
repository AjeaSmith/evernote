const { buildSchema } = require("graphql");
const notes = [
  {
    id: 1,
    title: "tim",
    content: "allen",
    image: "some image"
  }
];
const ourSchema = buildSchema(`
type Query {
  notes: [Note]
  note(id: ID): Note
}
type Note{
  id: ID,
  title: String,
  content: String,
  image: String
}
input noteinput{
  title: String,
  content: String,
  image: String
}
type Mutation {
  createNote(noteInput: noteinput): Note
  deleteNote(id: ID): Note
}
`);
const resolver = {
  notes: () => notes,
  note: ({ id }) => notes[id - 1],
  createNote: ({ noteInput }) => {
    const note = {
      id: notes.length + 1,
      title: noteInput.title,
      content: noteInput.content,
      image: noteInput.image
    };
    notes.push(note);
    return note;
  }
};

module.exports = {
  ourSchema,
  resolver
};
