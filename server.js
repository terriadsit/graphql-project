const path = require('path');
const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // an express middleware function

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql']
});

const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolvers.js']
});

const schema = makeExecutableSchema({
    typeDefs: typesArray,    // contains schema
    resolvers: resolversArray
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(3000, () => {
    console.log('running graphql server...');
});

