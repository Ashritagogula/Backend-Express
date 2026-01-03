import userRoutes from "./routers/userRoutes.js";
import {getuser, adduser} from "./controllers/UserController.js"
import express from "express";
const app = express();
const port = 8000;

app.use(express.json());

app.use('/getuser', getuser);

app.use('/adduser', adduser);

app.listen(port, ()=>{
    console.log(`server running at the port ${port}`)
})

export default app;