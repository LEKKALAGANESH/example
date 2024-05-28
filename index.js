

// 3rd party packages

const express = require('express');
const dotevn = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const data = require('./data');
const Subscriber = require('./schema');
const app = require('./users');

const url = "mongodb://localhost:27017/test";

const bodyParser = require('body-parser');

const port = process.env.port || 5000;


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(cors());

// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// )

// app.use(bodyParser.json());

mongoose.connect(url)
    .then(() => { console.log("MongoDB connected successfully") })
    .catch(err => console.error("MongoDB connection error"));

const refreshAll = async () => {
    await Subscriber.deleteMany({});
    await Subscriber.insertMany(data);
    console.log("All data refreshed");
    mongoose.disconnect();
}
refreshAll();
