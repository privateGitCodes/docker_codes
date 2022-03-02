const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

const saveTask = asyncHandler(async (req, res) => {
  const taskText = req.body.text;
  if (!taskText || taskText.trim().length === 0) {
    res.status(422);
    throw new Error("Please add text field");
  }
  const task = await Task.create({
    text: taskText,
    user: req.user.id,
  });

  res.status(200).json(task);
});

module.exports = {
  getTasks,
  saveTask,
};
