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
        enum : ["Easy","Medium","Hard"]
    },
    topic : {
        type : String,
        trim : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{timestamps:true});

module.exports = mongoose.model('Question',questionSchema);