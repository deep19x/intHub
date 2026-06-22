const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    companies : [
        {
            type : String,
        }
    ],
    difficulty : {
        type : String,
        enum : ["Easy","Medium","Hard"],
        required : true
    },
    topic : {
        type : String,
        trim : true,
        required : true
    }
},{timestamps:true});

module.exports = mongoose.model('Question',questionSchema);