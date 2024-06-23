const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json());

app.get("/books", async (req, res) => {
    const books = await prisma.book.findMany();
    res.status(202).json(books)
})


app.get("/books/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    const book = await prisma.book.findUnique({
        where : { id }
    });
    res.json(book)
})

app.post("/books", async (req, res) => {
    const {title, author} = req.body;
    const newBook = await prisma.book.create({
        data: {
            title, 
            author
        }
    });
    res.json(newBook)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })