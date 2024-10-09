import mongoose from "mongoose";

//mongoose.connect("mongodb://user:password@localhost/dam2db")

export const connectDB = async() => {
    try{
        await mongoose.connect("mongodb://localhost/dam2db");
        console.log("BBDD ok")
    }catch(error){
        console.log(error);
    }
}