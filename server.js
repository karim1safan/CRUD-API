const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const PORT = 3000;

dotenv.config("env");

connectDB();

const corsOptions = {
  origin: "http://localhost:3001",
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

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
