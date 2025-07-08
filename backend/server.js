const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./Config/db");
const cors = require("cors");
app.use(cors());
// ✅ 1. Import your routes
const authRoutes = require("./Routes/AuthRoutes");

app.use(express.json());

// ✅ 2. Use your auth routes under /api path
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running..");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on 5000 port");
});

// ✅ 3. Connect to MongoDB
connectDB();
