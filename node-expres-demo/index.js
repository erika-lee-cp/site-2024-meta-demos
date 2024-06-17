const express = require('express');
const app = express()

const PORT = 3000


app.get('/', (req, res) => {
    res.send("hello world!")
})

app.get('/users/:id', (req, res) => {
    res.send(`sending user data for user ${req.params.id} `);
})


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})