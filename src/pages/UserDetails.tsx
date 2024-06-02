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
    const fetchedEmployee = useAppSelector(getEmployee);
    const [ loaded, setLoaded ] = useState<boolean>(false);

    useEffect(() => {
        const fetcher = async () => {
            if (!id) return
            await dispatch(fetchEmployee(id))
            setLoaded(true);
        }
        fetcher()
    }, [])

    if (!loaded){
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }

    return (
        <>
            <SideBar />
            <main className="contact-container">
                <NavContainer title="Room Details" />
                <p>{`This is employee with id #${id.slice(0, 10).toUpperCase()}.`}</p>
                <p>{`His name is ${fetchedEmployee.employee_fullName}.`}</p>
                <p>Here is his personal info:</p>
                <ul>
                    <li>{`Phone contact: ${fetchedEmployee.employee_phone.slice(0, 13)}`}</li>
                    <li>{`Mail: ${fetchedEmployee.employee_email}`}</li>
                </ul>
                <p>{`His job is/was ${fetchedEmployee.employee_description}.`}</p>
                <p>{`He/her started working here at ${fetchedEmployee.employee_startDate.slice(0, 10)} and is actually ${fetchedEmployee.employee_status} in the company.`}</p>
            </main>
        </>
    )
}