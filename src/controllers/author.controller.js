//TODO: Make Author Controller.
const { registerAuthor } = require("../services/author.service");

const createAuthor = async (req, res) => {
    try {
        let newAuthor = req.body;
        const author = await registerAuthor(newAuthor);
        return res.status(200).json({ message: "Author created successfully", author });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error});
    }
}

module.exports = { createAuthor }