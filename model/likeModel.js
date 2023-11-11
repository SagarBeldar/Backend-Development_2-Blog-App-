//import mongoose
const mongoose=require("mongoose");

//route handler
const LikeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        require:true,
    },
});

//export
module.exports=mongoose.model("Like",LikeSchema);