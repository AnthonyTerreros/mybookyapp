const express = require('express');
var morgan = require('morgan');
var cors = require('cors');
const booksRouter = require('./v1/routes/books.routes');
const authorRouter = require('./v1/routes/author.routes');
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger');

const app = express();
const PORT = 5000;

//MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/authors", authorRouter);

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}.\nhttp://localhost:${PORT}/`);
    V1SwaggerDocs(app, PORT);
})