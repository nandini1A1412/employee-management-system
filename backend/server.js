const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

const employeeRoutes =
require("./routes/employeeRoutes");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

app.use(
  "/api/employees",
  employeeRoutes
);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});