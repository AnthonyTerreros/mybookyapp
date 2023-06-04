const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const registerAuthor = async (author) => {
    const newAuthor = await prisma.author.create({ data: author });
    return newAuthor
}

module.exports = { registerAuthor }