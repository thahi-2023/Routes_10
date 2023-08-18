const express = require('express');
const app = express;
const port = 3000;

// home Routes

app.get('/', (req, res) => {
    res.send('<h1> Build 10 Routes </h1>')
})

// Routes 1
app.get('/shopping', (req, res) => {
    res.send('<h1> Go to shopping </h1>')
})

// Routes 2
app.get('/walking', (req, res) => {
    res.send('<h1> Go to walking </h1>')
})

// Routes 3
app.get('/swimming', (req, res) => {
    res.send('<h1> Go to swimming </h1>')
})

// Routes 4
app.get('/dinner', (req, res) => {
    res.send('<h1> Go to dinner</h1>')
})
// Routes 5
app.get('/sleeping', (req, res) => {
    res.send('<h1> Go to sleeping </h1>')
})

// Routes 6
app.get('/drink', (req, res) => {
    res.send('<h1> drink water </h1>')
})

// Routes 7
app.get('/read', (req, res) => {
    res.send('<h1> read books</h1>')
})

// Routes 8
app.get('/rest', (req, res) => {
    res.send('<h1> take rest</h1>')
})

// Routes 9
app.get('/code', (req, res) => {
    res.send('<h1> Do more code </h1>')
})

// Routes 10
app.get('/best', (req, res) => {
    res.send('<h1> do your best </h1>')
})


//Listner
app.listen (port, ()=> {
    console.log(`listen to the port http://localhost:${port}`)
})