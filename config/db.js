const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to DB..."))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connectDB;
