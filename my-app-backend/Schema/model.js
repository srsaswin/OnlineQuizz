const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    name: String,
    password: String
});
module.exports = mongoose.model('User', loginSchema, 'user')