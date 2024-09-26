import mongoose from "mongoose";
import blogModel from "../model/blogModel.js";
import userModel from "../model/userModel.js";



const getAllBlogsController = async(req, res) => {
    try {
        const blogs = await blogModel.find({});
        if(!blogs){
            return res.status(404).json({message: "No blogs found"});
        }
        return res.status(200).send({
            blogsCount:blogs.length,
            success: true,
            message: "all blogs list",
            blogs
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"Error whilw gwtting Blogs",
            error
        })
    }
};





const createBlogController = async(req, res) => {
    try {
        const {title , description , image , user} = req.body;
        if(!title || !description || !image){
            return res.status(400).json({message: "Please fill all fields"});
        }

        const existingUser = await userModel.findById(user);
        if(!existingUser){
            return res.status(404).json({message: "User not found"});
        }


        // START VERY IMPORTANT PART
        const newBlog = new blogModel({title , description , image,user: existingUser._id})
        const session = await mongoose.startSession();
        session.startTransaction();
        await newBlog.save({session});
        existingUser.blogs.push(newBlog);
        await existingUser.save({session});
        await session.commitTransaction();
        await newBlog.save();
        // END VERY IMPORTANT PART


        return res.status(201).send({
            success: true,
            message: "Blog created successfully",
            newBlog
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success:false,
            message:"error while creating Blog",
            error
        })
    }
};




export {
  getAllBlogsController,
  createBlogController
};
