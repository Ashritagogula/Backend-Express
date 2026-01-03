const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// 1️⃣ Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// 2️⃣ Create Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  course: String
});

app.get("/add", (req, res) => {
  res.send("Add route is working");
});


// 3️⃣ Create Model
const Student = mongoose.model('Student', studentSchema);

// 4️ CREATE ➤ Add new student
app.post('/add', async (req, res) => {
  const data = new Student(req.body);
  await data.save();
  res.send('Student added successfully!');
});

// 5️ READ ➤ Get all students
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// 6️ UPDATE ➤ Update student by ID
app.put('/update/:id', async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.send('Student updated successfully!');
});

// 7️⃣ DELETE ➤ Delete student by ID
app.delete('/delete/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send('Student deleted successfully!');
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running on port 3000');
});
