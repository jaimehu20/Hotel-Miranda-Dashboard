import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch } from "../../../Hooks/hooks";
import { newEmployee } from "../../../app/store/Employees/EmployeesThunk";

const ModalInfo = styled.div`
    position: absolute;
    top: 500px;
    left: 1000px;
    flex-direction: column;
    width: 400px;
    background: #c0bdbd;
    border-radius: 10px;
    padding: 10px 20px 20px 20px;
    border: 1px solid black;
    button {
        position: relative;
        bottom: 92px;
        left: 86px;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    svg {
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

type props = {
    modalAdd: any,
    setModalAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisibleModalBox = ({setModalAdd}: props) => {

    const dispatch = useAppDispatch();
    const setModalAddToggler = () => {
        setModalAdd(false)
    }


    const handleSubmit = async (e: any)  => {
        e.preventDefault();

        const startDateValue = e.target.employee_startDate.value;
        const startDateConversion = new Date(startDateValue);
        const startDate = startDateConversion.toISOString();

        const employee = {
            employee_fullName: e.target.employee_fullName.value,
            employee_email: e.target.employee_email.value,
            employee_password: "$2a$10$MCfKIChnqRntUjYkjiEOMOeG6OcPpEAUZzFXnNPYrLz.blOiShrdW",
            employee_startDate: startDate,
            employee_description: e.target.employee_description.value,
            employee_phone: e.target.employee_phone.value,
            employee_status: e.target.employee_status.value
        };
        await dispatch(newEmployee(employee))
        setModalAddToggler();
}

    return (
        <ModalInfo>
            <div>
                <h1>Create Employee Profile</h1>
                <IoCloseOutline onClick={() => setModalAdd(false)} />
            </div>
            <form action="/employees" method="POST" onSubmit={handleSubmit} >
                <label htmlFor="employee_fullName">Full Name</label>
                <input type="text" name="employee_fullName" placeholder="e.g. John Doe"/>
                <label htmlFor="employee_email">Email</label>
                <input type="email" name="employee_email" placeholder="e.g. test@test.com"/>
                <label htmlFor="employee_startDate">Start Date</label>
                <input type="date" name="employee_startDate" />
                <label htmlFor="employee_description">Workstation</label>
                <select name="employee_description">
                    <option value="VP Accounting">VP Accounting</option>
                    <option value="Assistant Professor">Assistant Professor</option>
                    <option value="Paralegal">Paralegal</option>
                    <option value="Marketing Assistant">Marketing Assistant</option>
                    <option value="Senior Quality Engineer">Senior Quality Engineer</option>
                    <option value="Junior Executive">Junior Executive</option>
                    <option value="Internal Auditor">Internal Auditor</option>
                    <option value="Assistant Manager">Assistant Manager</option>
                    <option value="Physical Therapy Assistant">Physical Therapy Assistant</option>
                    <option value="Operator">Operator</option>
                </select>
                <label htmlFor="employee_phone">Contact Phone</label>
                <input type="number" name="employee_phone" placeholder="e.g. 1-728-868-2571"/>
                <label htmlFor="employee_status">Status</label>
                <select name="employee_status">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <input type="submit" value="Add employee profile"/>
            </form> 
        </ModalInfo>
    )
}

const HiddenModalBox = () => {
    return <></>
}

export function NewEmployeeModal({modalAdd, setModalAdd}: props) {
    return (
        <>
        {modalAdd ? <VisibleModalBox setModalAdd={setModalAdd} modalAdd={modalAdd}/> : <HiddenModalBox/>}
        </>
    )
}