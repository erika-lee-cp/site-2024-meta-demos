const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var cors = require('cors')
const express = require('express')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express()
const PORT = 3000

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
    // Fill this in
})


app.post("/login", async (req, res) => {
    // Fill this in
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })