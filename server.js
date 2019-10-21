const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
//import routes
const authRouter = require('./users/auth-router');

const server = express();

//routes go here
server.use('/api/auth', authRouter);

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: 'Backend up and running'})
});

module.exports = server;