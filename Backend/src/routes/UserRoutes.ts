import express from "express";
import * as UserController from "../controllers/UserController";

//create sxpress router instance
const router = express.Router();

router.post('/login', UserController.loginUser);
router.post('/register', UserController.registerUser);

export default router;