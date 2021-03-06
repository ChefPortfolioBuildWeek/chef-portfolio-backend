const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
//import routes
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const postsRouter = require('./posts/posts-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

//routes go here
server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: 'Backend up and running'})
});

module.exports = server;