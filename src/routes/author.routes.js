const express = require('express');
const { createAuthor } = require('../controllers/author.controller');

const authorRouter = express.Router();

//TODO: MAKE GET, PUT, DELETE Endpoints for Authors.
authorRouter.post('/', createAuthor);

module.exports = authorRouter;