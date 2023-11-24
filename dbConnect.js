const mongoose = require("mongoose");

async function connection(){
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/testdb");
        console.log('db connected');
    } catch(error){
        console.log(`db not connected ${error}`);
    }
}

connection();