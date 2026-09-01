const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const PORT = 3000;

dotenv.config("env");

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, nex) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")} ${req.originalUrl}`,
  );
  nex();
});

app.use("/api/products", require("./routes/productRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
