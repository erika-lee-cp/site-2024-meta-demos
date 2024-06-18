const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const cors = require('cors')
const express = require('express')

const app = express();
app.use(express.json())
app.use(cors());

app.get('/photos', async (req, res) => {
    const photos = await prisma.photo.findMany()
    res.status(200).json(photos);
});

app.get('/photos/:id', async (req, res) => {
    const { id } = req.params
    const photos = await prisma.photo.findUnique(
        {
            where: { id: parseInt(id) },
        });
    res.status(200).json(photos);
});

app.post('/photos', async (req, res) => {
    const { imgUrl, caption } = req.body;
    console.log(req.body);
    const newPhoto = await prisma.photo.create({
      data: {
        imgUrl,
        caption
      }
    })
    res.status(201).json(newPhoto);
});

const PORT =  process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}); 
