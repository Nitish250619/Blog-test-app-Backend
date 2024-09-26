import express from "express";
import cors from "cors"
import morgan from "morgan"
import dotenv from "dotenv";
import connectedDB from "./config/db.js";
import blogsRoutes from "./routes/blog.routes.js"


//env config
dotenv.config();


connectedDB()

const server = express();




//middeleware
server.use(cors());
server.use(express.json());
server.use(morgan('dev'));



//routes
server.use('/api/blogs',blogsRoutes)


server.listen(process.env.PORT || 8084 , ()=>{
    console.log("server is running on 8084 port")
})