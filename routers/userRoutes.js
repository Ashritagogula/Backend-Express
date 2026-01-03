import express from "express";
import {getuser, adduser} from "../controllers/UserController.js";
const app = express.Router();
app.get("/getuser",getuser)
app.post("/adduser",adduser)
export default app;