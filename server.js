const express = require('express'); 
const cors = require('cors');

const projectsRouter = require('./projects/projects-router.js');
const actionsRouter = require('./actions/actions-router.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;