import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();


const mongoUri = process.env.MONGO_URL



const connectedDB = async()=>{
    try {
        await mongoose.connect(mongoUri)
        console.log("DataBase connected Properly")
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
        process.exit(1); 
    }
}


export default connectedDB;