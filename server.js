const express = require('express');

// const usersRouter = require('./users/projects-router.js');
// const postsRouter = require('./posts/actions-router.js');

const server = express();

server.use(express.json());

// server.use('/api/projects', usersRouter);
// server.use('/api/actions', postsRouter);

module.exports = server;