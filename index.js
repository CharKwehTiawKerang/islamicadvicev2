const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()

const advices = require('./array').advices


//add id to each array objects
const data = []

advices.forEach((item, i) => {
    data.push(Object.assign({id: i, ...item}))
})


//function to get random item
function random(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]

    return item
}


//Routing
app.get('/', (req, res) => {
    res.json('Welcome To Islamic Advice API')
})


app.get('/alladvice', (req, res) => {
    res.json(data)
})

app.get('/advice', (req, res) => {
    res.json(random(data))
})


app.listen(PORT, () => console.log(`PORT is running on ${PORT}`))