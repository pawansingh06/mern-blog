import express from "express";
import { vertifyToken } from "../utils/verifyUser.js";
import { create } from "../controllers/post.controller.js";


const router =express.Router();

router.post('/create',vertifyToken,create)

export default router;