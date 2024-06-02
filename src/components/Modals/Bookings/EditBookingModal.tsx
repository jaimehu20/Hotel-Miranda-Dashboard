import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch } from "../../../Hooks/hooks";
import { editBooking } from "../../../app/store/Bookings/BookingsThunk";

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
    const checkIn = document.getElementById("checkIn");
    const checkOut = document.getElementById("checkOut");

    const setModalEditToggler = () =>{
        setModalEdit(false);
    }
    const checkInDate = new Date(id.check_in);
    const defaultCheckInDate = checkInDate.toISOString().slice(0, 10);
    const checkOutDate = new Date(id.check_out);
    const defaultCheckOutDate = checkOutDate.toISOString().slice(0, 10);

    const handleSubmit = async (e : any,) => {
        e.preventDefault();

        const checkInValue = e.target.check_in.value;
        const checkInConversion = new Date(checkInValue)
        const checkInDate = checkInConversion.toISOString();

        const checkOutValue = e.target.check_out.value;
        const checkOutConversion = new Date(checkOutValue);
        const checkOutDate = checkOutConversion.toISOString()

        const editedBooking : any = {
            first_name: e.target.first_name.value || id.first_name,
            last_name: e.target.last_name.value || id.last_name,
            order_date: id.order_date,
            check_in: checkInDate || id.check_in,
            check_inTime: id.check_inTime,
            check_out: checkOutDate || id.check_out,
            check_OutTime: id.check_OutTime,
            booking_time: id.booking_time,
            room_type: e.target.room_type.value || id.room_type,
            status: id.status,
        };
        const data = {id: id._id, data: editedBooking}
        await dispatch(editBooking(data));
        setModalEditToggler();
    }
    
return (
    <ModalInfo>
        <div>
            <h1>Edit Booking</h1>
            <IoCloseOutline onClick={() => setModalEdit(false)}/>
        </div>
        <p>Modify all or only those fields you need</p>
        <form action="/bookings" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name</label>
                <input type="text" name="first_name" defaultValue={id.first_name}/>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" name="last_name" defaultValue={id.last_name}/>
                <label htmlFor="check_in">Check In</label>
                <input type="date" name="check_in" id="checkIn" defaultValue={defaultCheckInDate}/>
                <label htmlFor="check_out">Check Out</label>
                <input type="date" name="check_out" id="checkOut" defaultValue={defaultCheckOutDate}/>
                <label htmlFor="room_type">Room Floor</label>
                <select name="room_type" defaultValue={id.room_type}>
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Double Bed Superior">Double Bed Superior</option>
                    <option value="Suite">Suite</option>
                </select>
                <input type="submit" value="Edit booking"/>
            </form> 
    </ModalInfo>
)
}

const HiddenModalBox = () => {
    return <></>
}

export function EditBookingModal({modalEdit, setModalEdit, id}: props) {
    return (
        <>
        {modalEdit ? <VisibleModalBox setModalEdit={setModalEdit} id={id} /> : <HiddenModalBox/>}
        </>
    )
}