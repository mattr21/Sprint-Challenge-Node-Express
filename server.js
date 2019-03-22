const express = require('express'); 

// const usersRouter = require('./projects/projects-router.js');
// const postsRouter = require('./actions/actions-router.js');

const server = express();

server.use(express.json());

// server.use('/api/projects', projectsRouter);
// server.use('/api/actions', actionsRouter);

module.exports = server;