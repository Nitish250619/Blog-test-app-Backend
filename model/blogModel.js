import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true , 'title is require']
    },
    description:{
        type:String,
        require:[true , 'description is require']
    },
    image:{
        type:String,
        require:[true , 'image is require']
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"Users",
        require:[true , 'user is require']
    }
},{
    timestamps:true
})

const blogModel = mongoose.model('Blogs',blogSchema)

export default blogModel;