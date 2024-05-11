import express from "express";
import { vertifyToken } from "../utils/verifyUser.js";
import { create, getposts } from "../controllers/post.controller.js";


const router =express.Router();

router.post('/create',vertifyToken,create)
router.get('/getposts',getposts); 

export default router;