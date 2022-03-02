const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleWare");

const { getTasks, saveTask } = require("../controllers/taskController");

router.get("/", protect, getTasks);

router.post("/", protect, saveTask);

router.delete("/:id", protect, async (req, res) => {
  console.log("Trying to delete task");
  try {
    await Task.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Deleted task!" });
    console.log("DELETED Task");
  } catch (err) {
    console.error("ERROR Featching Tasks");
    console.error(err.message);
    res.status(500).json({ message: "Failed to delete task" });
  }
});

module.exports = router;
