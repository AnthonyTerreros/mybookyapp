const express = require('express');
var morgan = require('morgan');
var cors = require('cors');
const booksRouter = require('./routes/books.routes');
const authorRouter = require('./routes/author.routes');


const app = express();
const PORT = 5000;

//MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use("/api/books", booksRouter);
app.use("/api/authors", authorRouter);


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}.\nhttp://localhost:${PORT}/`);
})