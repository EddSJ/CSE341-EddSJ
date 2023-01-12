const mongoose = require('mongoose');

const contact = mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    favoriteColor: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('contact', contact);