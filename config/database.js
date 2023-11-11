const mongoose=require("mongoose");

require("dotenv").config();

const connectWithdb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("Connection establish successfully"))
    .catch((err) => {
        console.log("DB fetching conectin issue");
        console.log(err);
        console.exit(1);
    });
}

module.exports=connectWithdb;