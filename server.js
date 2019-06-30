const express = require("express");
const graphqlHTTP = require("express-graphql");
// require build schema method from graphql
const { buildSchema } = require("graphql");
const app = express();

// Create dummy data
const data = [
  {
    id: 1,
    firstname: "tim",
    lastname: "allen",
    favColor: ["blue", "pink", "teal"]
  },
  {
    id: 2,
    firstname: "james",
    lastname: "borlan",
    favColor: ["blue", "yellow", "red"]
  },
  {
    id: 3,
    firstname: "fred",
    lastname: "kruger",
    favColor: ["blue", "purple", "teal"]
  }
];

// Build Schema
const ourSchema = buildSchema(`
type Query {
  people: [Person]
}
type Person{
  id: ID,
  firstname: String,
  lastname: String
}
input personinput{
  firstname: String,
  lastname: String
}
type Mutation {
  ADDPerson(input: personinput): [Person]
}
`);
//Create resolvers
const resolver = {
  people: () => data,
  ADDPerson: ({ input }) => {
    const person = {
      id: data.length,
      firstname: input.firstname,
      lastname: input.lastname
    };
    data.push(person);
    return data;
  }
};
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
