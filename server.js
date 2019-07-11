const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const { ourSchema} = require("./schema");
const allResolvers = require("./resolvers/index");
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://ajeasmith1:v54eKA5zR7wYDhVL@cluster0-qauba.mongodb.net/evernote?retryWrites=true&w=majority', (err) =>{
  if(err) return console.log(err)
  console.log('connected to mongodb')
})


app.use(
  "/graphql",
  graphqlHTTP({
    schema: ourSchema,
    rootValue: allResolvers,
    graphiql: true
  })
);
// http://localhost:5000
const PORT = 5000;

app.listen(PORT, () => {
  console.log("server is running");
});
