
const express = require('express');
const mongoose = require('mongoose');
const data = require('./data')
const Subscriber = require('./schema');

const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const { error } = require('console');
const { json } = require('stream/consumers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) =>  {
    // res.sendFile(path.join(__dirname, "/index.html"));
    try {
        let subscribers = await Subscriber.find({});
        console.log(subscribers);
        res.send(json.stringify({subscribers}));
    } catch (err) {
        res.send("Error");
        console.error(err);
    }
});

app.post('/postapi', (req, res) => {
    console.log(req.body.firstname);
    console.log(req.body.email);
    res.send("postapi is called");
});


app.use((req, res) => {
    res.status(404).json(
    {error:'error'}
    )
})






module.exports = app;