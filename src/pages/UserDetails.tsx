import { SideBar } from "../components/SideBar/SideBar"
import { NavContainer } from "../components/NavBar/NavBar"
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchEmployee } from "../app/store/Employees/EmployeesThunk";
import { getEmployee } from "../app/store/Employees/EmployeesSlice";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";

export function UserDetails() {

    let { id } = useParams();
    const dispatch = useAppDispatch();
    const individualEmployee = useAppSelector(getEmployee);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        if (!id) return
        setLoading(false);
        dispatch(fetchEmployee(id))
    }, [])

    return (
        <>
        {loading ?
        <p>Loading content...</p>
            :
            <>
                <SideBar />
                <main className="contact-container">
                    <NavContainer title="Room Details" />
                    <p>{`This is employee with id #${id}.`}</p>
                    <p>{`His name is ${individualEmployee.employee_name}.`}</p>
                    <p>Here is his personal info:</p>
                    <ul>
                        <li>{`Phone contact: ${individualEmployee.employee_phone}`}</li>
                        <li>{`Mail: ${individualEmployee.employee_email}`}</li>
                    </ul>
                    <p>{`His job is/was ${individualEmployee.employee_description}.`}</p>
                    <p>{`He/her is started working here at ${individualEmployee.employee_startDate} and is actually ${individualEmployee.employee_status} in the company.`}</p>
                </main>
            </>
        }
        </>
    )
}