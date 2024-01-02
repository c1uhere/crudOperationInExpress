const mongoose = require("mongoose");
const DB_NAME = require("./constant")
require("dotenv/config");

async function connection(){
    try{
        await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
        //mongodb+srv://yourAtlasUsernameHere:yourpasswordhere@cluster0.dptkfe3.mongodb.net put it inside varible DB_URI inside .env file
        console.log('db connected');
    } catch(error){
        console.log(`db not connected ${error}`);
    }
}

connection();