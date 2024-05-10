import express from "express";
import { deleteUser, signout, test, updateUser } from "../controllers/user.controller.js";
import { vertifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.put('/update/:userId',vertifyToken,updateUser);
router.delete('/delete/:userId', vertifyToken,deleteUser);
router.post('/signout',signout)


export default router;