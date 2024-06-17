const express = require('express')
const app = express()
const PORT = 3000
app.use(express.json())

let pets = [
    {id: 1, name: "leo", type: "cat"},
    {id: 2, name: "cooper", type: "dog"},
    {id: 3, name: "lavender", type: "hamster"}
]

app.get("/", (req, res) => {
    res.send("welcome to my app")
})

app.get("/hello-world", (req, res) => {
    res.send("hello world!")
})

app.get("/pets", (req, res) => {
    res.json(pets)
})

app.get("/pets/:id", (req, res) => {
    const id = req.params.id;
    const pet = pets.find((pet) => pet.id == id)
    res.json(pet);
})

app.post("/pets", (req, res) => {
    const { id, name, type } = req.body;
    const newPet = {
        id,
        name,
        type 
    }
    pets.push(newPet);
    res.status(201).json(newPet);
})

app.put("/pets/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const petIndex = pets.findIndex((pet) => pet.id === id)

    if (petIndex !== -1) {
        const updatedPet = req.body;
        pets[petIndex] = { ...pets[petIndex], ...updatedPet}
        res.json(pets[petIndex]);
    } else {
        res.status(404).json({error: "not found"})
    }
})

app.delete("/pets/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = pets.length
    const pet = pets.find((pet) => pet.id === id)

    pets = pets.filter(pet => pet.id !== id)
    if (pets.length < initialLength) {
        res.status(204).json(pet)
      } else {
        res.status(404).json({error: 'Pet not found'})
      }

})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}!`)
})