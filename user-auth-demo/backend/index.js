const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var cors = require('cors')
const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
    const {user, password} = req.body;

    console.log(user)
    console.log(password)
    res.status(201).json({})
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })