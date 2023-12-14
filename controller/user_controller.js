import { response } from "express"
import userModel from "../model/datamodel.js"



export const userRegisteration = async(req,res)=>{
    try {
        console.log('entered...')
        const {email,password} = req.body
        const userData = new userModel({
            email:email,
            password:password
        }).save()

        if(userData){
            res.status(200).json({message:'User Registeration Successfull'})
        }else{
            res.status(400).json({message:'User registeration Failed'})
        }

    } catch (error) {
        console.log(error.message)
    }
}