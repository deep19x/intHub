const mongoose = require('mongoose');

const userProgressSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    question : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question',
        required : true
    },
    status : {
        type : String,
        enum : ['attempted','solved'],
        default : 'attempted'
    },
    solvedAt : {
        type : Date
    }
},{timestamps:true});

userProgressSchema.index(
    {user : 1,question : 1},
    {unique : true}
);

module.exports = mongoose.model('UserProgress',userProgressSchema);