const { subscribe } = require('diagnostics_channel');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;
const Subscriber = new Schema({
    name: {
        type: String,
        required: true
    },
    subscribeChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('users', Subscriber);
