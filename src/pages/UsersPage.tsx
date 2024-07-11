import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { EmployeesFilter } from "../components/ListSelector/ListSelector";
import { Table } from "../components/Table/TableBox";
import { FaPhone } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import userPic from "../assets/employee.jpg";
import { getAllEmployees, getEmployeeError, getEmployeeStatus } from "../app/store/Employees/EmployeesSlice";
import { fetchEmployees } from "../app/store/Employees/EmployeesThunk";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filteredByEmployee, filteredByEmployeeStatus } from "../app/filters";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { NewEmployeeModal } from "../components/Modals/Employees/NewEmployeeModal";
import { DeleteEmployeeModal } from "../components/Modals/Employees/DeleteEmployeeModal";
import { EditEmployeeModal } from "../components/Modals/Employees/EditEmployeeModal";

type props = {
  title?: string
}

function Users(props : props) {

  const dispatch = useAppDispatch();
  const multipleEmployees = useAppSelector(getAllEmployees);
  const employeeStatus = useAppSelector(getEmployeeStatus);
  const employeeError = useAppSelector(getEmployeeError);
  const [ searchInput, setSearchInput ] = useState<string>("");
  const [ clicked, setClicked ] = useState<string>("all");
  const [ loaded, setLoaded ] = useState<boolean>(false);
  const [ id, setId ] = useState<string>("");
  const [ modalAdd, setModalAdd ] = useState<boolean>(false);
  const [ modalEdit, setModalEdit ] = useState<boolean>(false);
  const [ modalDelete, setModalDelete ] = useState<boolean>(false);
  let className : string = "";
  
  useEffect(() => {
    const fetcher = async () => {
      await dispatch(fetchEmployees());
      setLoaded(true)
    }
    fetcher();
    },[])

    if (!loaded){
      return (
        <>
          <p>Loading...</p>
        </>
      )
    }
    
    let filteredEmployeeList : any = filteredByEmployee(multipleEmployees, searchInput);
    filteredEmployeeList = filteredByEmployeeStatus(filteredEmployeeList, clicked);
    
  const columns = [
      {property: "employee_name", label: "Name", display: (item : any) => (
      <>
      <Link to={`/users/${item._id}`}>
          <div className="employee-container">
          <img src={userPic}/>
          <div>
            <p>{item.employee_fullName}</p>
            <p>#{item._id.slice(0, 8).toUpperCase()}</p>
            <p>{item.employee_startDate.slice(0, 10)}</p>
          </div>
          </div>
        </Link>
      </>)},
      {property: "employee_email", label: "Email"},
      {property: "employee_description", label: "Job Desk"},
      {property: "employee_phone", label: "Contact", display: (item : any) => (<><FaPhone /><p>{item.employee_phone.slice(0, 13)}</p></>)},
      {property: "employee_status", label: "Status", display: (item : any) => {

        if (item.employee_status === "Active"){
          className = "greenButton"
        } else if (item.employee_status === "Inactive"){
          className = "redButton"
        }
        return (
          <button className={className}>{item.employee_status}</button>
        )
      }},
      {property: 'actions', label: 'Actions', display: (item : any) => (<div>
        <FaEdit onClick={() => {setModalEdit(true), setModalDelete(false), setId(item)}} />
        <RxCrossCircled onClick={() => {setModalDelete(true), setId(item)}} />
      </div>)}
  ]
  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Users" />
        <EmployeesFilter setSearchInput={setSearchInput} setClicked={setClicked} setModalAdd={setModalAdd}/>
        <Table columns={columns} data={filteredEmployeeList}/>
        <NewEmployeeModal setModalAdd={setModalAdd} modalAdd={modalAdd}/>
        <EditEmployeeModal modalEdit={modalEdit} setModalEdit={setModalEdit} id={id} />
        <DeleteEmployeeModal modalDelete={modalDelete} setModalDelete={setModalDelete} id={id} />
      </main>
    </>
  )
}

export default Users;
