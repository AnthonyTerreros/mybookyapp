const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const obtainAllBooks = async () => {
  const books = await prisma.books.findMany();
  if (!books) return null;
  return books;
};

const createBook = async (book) => {
  const newBook = await prisma.books.create({ data: book });
  return newBook;
};

const obtainBookById = async (id) => {
  const books = await prisma.books.findMany();
  if (!books) return null;
  return books;
};

const obtainBooksByAuthor = async (id) => {
  const books = await prisma.books.findMany({ where: { author_id: id } });
  if (!books) return null;
  return books;
};

const changeInformationBook = async (newBook) => {
  const book = await prisma.books.update({
    where: { id: newBook.id },
    data: newBook,
  });
  return book;
};

const removeBook = async (id) => {
  const newBook = await prisma.books.delete({ where: { id } });
  return newBook;
};

module.exports = {
  obtainAllBooks,
  obtainBookById,
  obtainBooksByAuthor,
  createBook,
  removeBook,
  changeInformationBook,
};
