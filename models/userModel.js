import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
    unique: true,
 },
 email: {
    type: String,
    required: true,
    unique: true,
 },

 password: {
    type: String,
    required: true,
  
 },
 img: {
    type: String,
 },
 subscribedUsers:{
    type:[String]
 },
 role:{
    type:Number,
    default:0
 },
 subscribers:{
   type:Number,
   default:0
 }
},{timestamps:true});

export default mongoose.model("user", UserSchema)