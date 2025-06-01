const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        name: String,
        password: String,
        testContest: {
            type: [String],
            default: []
        },
        hostContest: {
            type: [String],
            default: []
        }

    }
);

module.exports = mongoose.model('User', userDataSchema, 'user');