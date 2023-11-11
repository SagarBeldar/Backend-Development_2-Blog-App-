//import model

const Post=require("../model/postModel");
const Comment=require("../model/commentModel");
// const { connect } = require("mongoose");

//business logic

exports.createComment=async (req,res){
    try{
    //fetch data from req. body
    const{post,user,body}=req.body;

    //create a comment object
    const comment =new Comment({
        post,user,body
    });

    //save the new comment into database
    const saveComment=await comment.save();
    }
    catch(err){

    }
}