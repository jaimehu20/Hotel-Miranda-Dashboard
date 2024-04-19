import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { Filter3 } from "../components/ListSelector/ListSelector";
import { Table } from "../components/Table/TableBox";
import { data } from "../app/EmployeeData";
import { FaPhone } from "react-icons/fa6";
import userPic from "../assets/employee.jpg"

function Users(props) {

  const columns = [
      {property: "employee_name", label: "Name", display: e => (
      <>
        <div className="employee-container">
          <img src={userPic}/>
          <div>
            <p>{e.employee_name}</p>
            <p>#{e.employee_id}</p>
            <p>{e.employee_startDate}</p>
          </div>
        </div>
      </>)},
      {property: "employee_email", label: "Email"},
      {property: "employee_description", label: "Job Desk"},
      {property: "employee_phone", label: "Contact", display: e => (<><FaPhone /><p>{e.employee_phone}</p></>)},
      {property: "employee_status", label: "Status"}
  ]
  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Users" />
        <Filter3 />
        <Table columns={columns} data={data}/>
      </main>
    </>
  )
}

export default Users;
