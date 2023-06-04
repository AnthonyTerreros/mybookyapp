const express = require('express');

const app = express();


//MIDDLEWARES
const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}.\nhttp://localhost:${PORT}/`);
})