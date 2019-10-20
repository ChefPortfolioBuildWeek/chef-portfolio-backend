const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
//import routes


//routes go here

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: 'Backend up and running'})
});

module.exports = server;