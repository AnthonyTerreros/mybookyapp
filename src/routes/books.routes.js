const express = require("express");
const {
  getAllBooks,
  getBooksByAuthor,
  getBookById,
  registerBook,
  updateBook,
  unregisterBook,
} = require("../controllers/books.controller");

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getBookById);
booksRouter.get("/:author", getBooksByAuthor);
booksRouter.post("/", registerBook);
booksRouter.put("/:id", updateBook);
booksRouter.put("/:id", unregisterBook);

module.exports = booksRouter;
