const express = require("express");
const {
  getAllBooks,
  getBooksByAuthor,
  getBookById,
  registerBook,
  updateBook,
  unregisterBook,
} = require("../../controllers/books.controller");

const booksRouter = express.Router();

/**
 * @openapi
 * /api/v1/books:
 *   get:
 *     tags:
 *       - Books
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
booksRouter.get("/", getAllBooks);

/**
 * @openapi
 * /api/v1/books/{id}:
 *   get:
 *     tags:
 *       - Books
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
booksRouter.get("/:id", getBookById);

/**
 * @openapi
 * /api/v1/books/{author}:
 *   get:
 *     tags:
 *       - Books
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
booksRouter.get("/:author", getBooksByAuthor);

/**
 * @openapi
 * /api/v1/books:
 *   get:
 *     tags:
 *       - Books
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
booksRouter.post("/", registerBook);

/**
 * @openapi
 * /api/v1/books/{id}:
 *   post:
 *     tags:
 *       - Books
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
booksRouter.put("/:id", updateBook);

/**
 * @openapi
 * /api/v1/books/{id}:
 *   put:
 *     tags:
 *       - Books
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
booksRouter.put("/:id", unregisterBook);

module.exports = booksRouter;
