import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch } from "../../../Hooks/hooks";
import { editEmployee } from "../../../app/store/Employees/EmployeesThunk";

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
    p {
        margin-top: 0;
    }
`

type props = {
    modalEdit?: boolean,
    setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
    id: any,
}

const VisibleModalBox = ({setModalEdit, id }: props) => {

    const dispatch = useAppDispatch();
    const startDate = document.getElementById("startDate");

    const setModalEditToggler = () =>{
        setModalEdit(false);
    }

    const getDate = async (inputValue : any) => {
        const value = await inputValue.value;
        return value
    }
    let fixedStartDate = "";
    if (id){
        fixedStartDate = id.employee_startDate.slice(0, 10)
    }

    const handleSubmit = async (e : any,) => {
        e.preventDefault();

        let startDateValue = "";

        if (startDate){
            startDateValue = await getDate(startDate);
        }
        const editedEmployee : any = {
            employee_fullName: e.target.employee_fullName.value || id.employee_fullName,
            employee_email: e.target.employee_email.value || id.employee_email,
            employee_password: id.employee_password,
            employee_startDate: startDateValue || id.employee_startDate,
            employee_description: e.target.employee_description.value || id.employee_description,
            employee_phone: e.target.employee_phone.value || id.employee_phone,
            employee_status: e.target.employee_status.value || id.employee_status
        };
        const data = {id: id._id, data: editedEmployee}
        await dispatch(editEmployee(data));
        setModalEditToggler();
    }
    
return (
    <ModalInfo>
        <div>
            <h1>Edit Employee Profile</h1>
            <IoCloseOutline onClick={() => setModalEdit(false)}/>
        </div>
        <p>Modify all or only those fields you need</p>
        <form action="/employees" method="POST" onSubmit={handleSubmit} >
                <label htmlFor="employee_fullName">Full Name</label>
                <input type="text" name="employee_fullName" defaultValue={id.employee_fullName}/>
                <label htmlFor="employee_email">Email</label>
                <input type="email" name="employee_email" defaultValue={id.employee_email}/>
                <label htmlFor="employee_startDate">Start Date</label>
                <input type="date" name="employee_startDate" id="startDate" defaultValue={fixedStartDate}/>
                <label htmlFor="employee_description">Workstation</label>
                <select name="employee_description" defaultValue={id.employee_description}>
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
                <input type="text" name="employee_phone" defaultValue={id.employee_phone.slice(0, 12)}/>
                <label htmlFor="employee_status">Status</label>
                <select name="employee_status" defaultValue={id.employee_status}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <input type="submit" value="Edit employee profile"/>
            </form>  
    </ModalInfo>
)
}

const HiddenModalBox = () => {
    return <></>
}

export function EditEmployeeModal({modalEdit, setModalEdit, id}: props) {
    return (
        <>
        {modalEdit ? <VisibleModalBox setModalEdit={setModalEdit} id={id} /> : <HiddenModalBox/>}
        </>
    )
}