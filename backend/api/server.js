const express = require('express')
const server = express();
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const quizRouter = require('../helpers/quizRouter');

server.use(helmet())
server.use(cors())
server.use(morgan())
server.use(express.json())



server.use('/api/quiz', quizRouter);


server.get('/', (req, res) => {
	res.status(200).json({ message: 'hello world' });
});


module.exports = server
