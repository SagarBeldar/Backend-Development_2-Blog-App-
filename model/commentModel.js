//import mongoose
const mongoose=require("mongoose");

//route handler
const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    }
});

module.exports=mongoose.model("comment",commentSchema); //commentSchema expoet by name comment