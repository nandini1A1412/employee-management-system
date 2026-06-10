const express = require("express");
const router = express.Router();

const Employee = require("../models/Employee");

// Add Employee
router.post("/", async (req, res) => {
  try {

    const employee = new Employee(req.body);

    await employee.save();

    res.send("Employee Saved");

  } catch (error) {

    res.status(500).send(error.message);

  }
});

// Get All Employees
router.get("/", async (req, res) => {
  try {

    const employees = await Employee.find();

    res.json(employees);

  } catch (error) {

    res.status(500).send(error.message);

  }
});

// Delete Employee
router.delete("/:id", async (req, res) => {
  try {

    await Employee.findByIdAndDelete(
      req.params.id
    );

    res.send("Employee Deleted");

  } catch (error) {

    res.status(500).send(error.message);

  }
});

module.exports = router;