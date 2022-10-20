const path = require('path');
const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql']
});

const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolvers.js']
});

async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({  //graphql tools
        typeDefs: typesArray,    // contains schema
        resolvers: resolversArray
    });
    
    const server = new ApolloServer({ // contains all the logic and middleware to handle incoming graphql requests
      schema
    });
    
    await server.start();

    server.applyMiddleware({ app, path: '/graphql' }) // calling app.use on the middleware created inside apollo server
    
    app.listen(3000, () => {
        console.log('running graphql server...');
    });

}

startApolloServer();





