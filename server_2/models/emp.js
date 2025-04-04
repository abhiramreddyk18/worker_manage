import mongoose from 'mongoose'

const empschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    empId:{
        type:String,
        
    },
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})


const empmodel=mongoose.model('emp',empschema)

export default empmodel;