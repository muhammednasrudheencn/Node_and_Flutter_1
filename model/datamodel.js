import mongoose from "mongoose";

const {Schema} = mongoose;

const userschema = new Schema({
    email:{
        type:String,
        lowercase: true,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        
    }
})

const userModel = mongoose.model('User',userschema);

export default userModel;