const { obtainAllBooks, obtainBookById, obtainBooksByAuthor, createBook, changeInformationBook, removeBook } = require("../services/books.service");

const getAllBooks = async (req, res) => {
    try {
        const books = await obtainAllBooks();
        if(!books) return res.status(200).json({message: "No books registered yet."});
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error });
    }
};

const getBookById = async (req, res) => {
    try {
        let id = req.params.id;
        const book = await obtainBookById(id);
        if(!book) return res.status(404).json({message: "No books found."});
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error });
    }
};

const getBooksByAuthor = async (req, res) => {
    try {
        let author = req.params.author;
        const book = await obtainBooksByAuthor(author);
        if(!book) return res.status(404).json({message: "No books found."});
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error });
    }
};

const registerBook = async (req, res) => {
    // try {
        let newBook = req.body;
        const book = await createBook(newBook);
        return res.status(200).json({message: "Book created", book: book});
    // } catch (error) {
    //     return res.status(500).json({ message: "Internal Server Error", error: error });
    // }
};

const updateBook = async (req, res) => {
    try {
        let editBook = req.body;
        const newBook = await changeInformationBook(editBook);
        return res.status(200).json({message: "Book Updated", newBook});
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error });
    }
};

const unregisterBook = async (req, res) => {
    try {
        let id = req.params.id
        await removeBook(id);
        return res.status(200).json({message: "Book Deleted"});
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    getBooksByAuthor,
    registerBook,
    updateBook,
    unregisterBook
}