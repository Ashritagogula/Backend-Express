import express from 'express';
import mongoose from 'mongoose';
import router from './routers/studentRoutes.js';
import cors from 'cors';

const app = express();
const port = 6001;

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://ashritagogula12_db_user:Ashrita2006@cluster0.zhdvkwk.mongodb.net/"
)
.then(() => console.log("db connected"))
.catch((error) => console.log("db error:", error.message));

app.use('/', router);

app.get('/users', (req, res) => {
  res.send("hello this is backend");
});

app.listen(port, () => {
  console.log(`server running at the port ${port}`);
});

export default app;
