const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const dotenv = require("dotenv").config();

const fs = require("fs");
const path = require("path");
const { errorHandler } = require("./middlewares/errorMiddleWare");
const { connectDB } = require("./config/db");

connectDB();
const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const origin = {
  // origin: isProduction ? 'https://rammehar.com' : '*',
  origin: "*"
}
app.use(cors(origin));

//load routes

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
