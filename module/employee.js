const mongoose = require('mongoose')

const employeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number,
    },
    salary:{
        type:Number,
        default:30000
    },
    email:{
        type:String
    },
    phone:{
        type:String,
    },

    city:{ 
        type:String,
        default:"Noida"
    },
    desig:{ 
        type:String
    },
})

const Employee = mongoose.model("Employee", employeSchema);
module.exports= Employee;