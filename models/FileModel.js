import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
 
 
 id:{
    type: String,
    required: true,
 }


},{timestamps:true});

export default mongoose.model("File", FileSchema);