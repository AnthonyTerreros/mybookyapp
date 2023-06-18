const express = require('express');
const { createAuthor } = require('../../controllers/author.controller');

/**
 * @openapi
 * /api/v1/authors:
 *   get:
 *     tags:
 *       - Authors
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
const authorRouter = express.Router();

//TODO: MAKE GET, PUT, DELETE Endpoints for Authors.
authorRouter.post('/', createAuthor);

module.exports = authorRouter;