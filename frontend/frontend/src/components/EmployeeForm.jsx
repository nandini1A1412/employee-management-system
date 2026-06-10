import { useState } from "react";
import axios from "axios";

function EmployeeForm() {

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const addEmployee = async () => {

    await axios.post(
      "http://localhost:5000/api/employees",
      employee
    );

    alert("Employee Added");
  };

  return (

    <div style={{ width: "700px", margin: "auto" }}>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        style={{
          width: "100%",
          height: "40px",
          marginBottom: "20px"
        }}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        style={{
          width: "100%",
          height: "40px",
          marginBottom: "20px"
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        style={{
          width: "100%",
          height: "40px",
          marginBottom: "20px"
        }}
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        onChange={handleChange}
        style={{
          width: "100%",
          height: "40px",
          marginBottom: "20px"
        }}
      />

      <button
        onClick={addEmployee}
        style={{
          width: "200px",
          height: "45px",
          fontSize: "18px"
        }}
      >
        Add Employee
      </button>

    </div>

  );
}

export default EmployeeForm;