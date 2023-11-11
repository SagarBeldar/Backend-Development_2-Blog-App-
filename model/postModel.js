//import mongoose
const mongoose = require("mongoose");

//route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    body:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    Comment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment",
    }
});

//export
module.exports = mongoose.model("Post", postSchema); //postSchema expoet by name Post