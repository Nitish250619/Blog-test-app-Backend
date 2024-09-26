import express from "express";
import {
  getAllBlogsController,
  createBlogController,
} from "../controllers/blog.controller.js";

const router = express.Router();

// GET ALL BLOG || GET
router.get("/all-blog", getAllBlogsController);

//CREATE BLOG || POST

router.post("/create-blog", createBlogController);


export default router;
