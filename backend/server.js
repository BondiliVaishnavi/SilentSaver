const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./Config/db");
const cors = require("cors");
app.use(cors());

const authRoutes = require("./Routes/AuthRoutes");
const salesRoutes=require("./Routes/SalesRoutes");

app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/sales",salesRoutes);

app.get("/", (req, res) => {
  res.send("Server is running..");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on 5000 port");
});
connectDB();
