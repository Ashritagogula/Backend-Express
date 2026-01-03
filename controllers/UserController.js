import express from "express";
const getuser = async (req, res) => {
  try {
    const data = await student.find();
    res.status(201).json(data);
  } catch {
    res.send("Try later")
  }
};

const adduser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    res.status(201).json("data added");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getuser, adduser };
