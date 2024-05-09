import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { EmployeesFilter } from "../components/ListSelector/ListSelector";
import { Table } from "../components/Table/TableBox";
import { data } from "../data/EmployeeData";
import { FaPhone } from "react-icons/fa6";
import userPic from "../assets/employee.jpg"
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees, getEmployee, getEmployeeError, getEmployeeStatus } from "../app/store/Employees/EmployeesSlice";
import { fetchEmployees } from "../app/store/Employees/EmployeesThunk";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filteredByEmployee, filteredByEmployeeStatus } from "../app/filters";
import { AppDispatch } from "../app/store/store";

type props = {
  title?: string
}

function Users(props : props) {

  const dispatch = useDispatch<AppDispatch>();
  const multipleEmployees = useSelector(getAllEmployees);
  const employeeStatus = useSelector(getEmployeeStatus);
  const employeeError = useSelector(getEmployeeError);
  const [ searchInput, setSearchInput ] = useState<string>("");
  const [ clicked, setClicked ] = useState<string>("all");
  
  useEffect(() => {
    if (employeeStatus === "pending"){
      console.log(employeeStatus);
    } else if (employeeStatus === "rejected"){
      console.log(employeeError)
    } else if (employeeStatus === "fulfilled") {
      console.log(employeeStatus)
    } else if (employeeStatus === "idle") {
      dispatch(fetchEmployees());
    }
    },[dispatch, multipleEmployees])
    
    let filteredEmployeeList = filteredByEmployee(multipleEmployees, searchInput);
    filteredEmployeeList = filteredByEmployeeStatus(filteredEmployeeList, clicked);

    
  const columns = [
      {property: "employee_name", label: "Name", display: (e : any) => (
      <>
      <Link to={`/users/${e.employee_id}`}>
          <div className="employee-container">
          <img src={userPic}/>
          <div>
            <p>{e.employee_name}</p>
            <p>#{e.employee_id}</p>
            <p>{e.employee_startDate}</p>
          </div>
          </div>
        </Link>
      </>)},
      {property: "employee_email", label: "Email"},
      {property: "employee_description", label: "Job Desk"},
      {property: "employee_phone", label: "Contact", display: (e : any) => (<><FaPhone /><p>{e.employee_phone}</p></>)},
      {property: "employee_status", label: "Status"}
  ]
  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Users" />
        <EmployeesFilter setSearchInput={setSearchInput} setClicked={setClicked}/>
        <Table columns={columns} data={filteredEmployeeList}/>
      </main>
    </>
  )
}

export default Users;
