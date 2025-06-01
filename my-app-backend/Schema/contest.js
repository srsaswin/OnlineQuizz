const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
    username: String,
    contestName: String,
    duration:{
        type:{
            start:String,
            end:String
        }
    },
    fetchCount:Number,
    questionStatus: [Object]
});


module.exports = mongoose.model('contest', contestSchema);