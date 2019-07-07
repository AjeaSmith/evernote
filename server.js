const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const { ourSchema, resolver } = require("./schema");
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ajeasmith:aQV0f7eVVwp5ARli@cluster0-qauba.mongodb.net/evernote?retryWrites=true&w=majority', (err) =>{
  if(err) return console.log(err)
  console.log('connected to mongodb')
})


app.use(
  "/graphql",
  graphqlHTTP({
    schema: ourSchema,
    rootValue: resolver,
    graphiql: true
  })
);
// http://localhost:5000
const PORT = 5000;

app.listen(PORT, () => {
  console.log("server is running");
});
