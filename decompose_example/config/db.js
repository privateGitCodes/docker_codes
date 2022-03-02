const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

    const conn = await mongoose.connect(
      `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/tasks-db?authSource=admin`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log(`MongoDB connected:${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
