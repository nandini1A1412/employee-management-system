const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  department: String,
  salary: Number
});

module.exports = mongoose.model(
  "Employee",
  EmployeeSchema
);