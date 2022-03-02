const express = require("express");
const { protect } = require("../middlewares/authMiddleWare");
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", protect, getMe);

module.exports = router;
