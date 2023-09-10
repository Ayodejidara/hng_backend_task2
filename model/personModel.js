const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name!'],
        trim: true
    }
});

module.exports = mongoose.model('Person', personSchema);