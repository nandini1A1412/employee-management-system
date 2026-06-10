import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/employees"
    );

    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/employees/${id}`
    );

    fetchEmployees();

  };

  return (
    <div>

      <h2>Employee List</h2>

      {employees.map((emp) => (

        <div key={emp._id}>

          <h3>{emp.firstName}</h3>

          <button
            onClick={() =>
              deleteEmployee(emp._id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default EmployeeList;