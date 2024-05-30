import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch } from "../../../Hooks/hooks";
import { newBooking } from "../../../app/store/Bookings/BookingsThunk";

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
    newBookingModal?: any,
    setNewBookingModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisibleModalBox = ({setNewBookingModal}: props) => {

    const orderDate = new Date();
    const dispatch = useAppDispatch();
    const checkIn = document.getElementById("checkIn");
    const checkOut = document.getElementById("checkOut");

    const setModalAddToggler = () => {
        setNewBookingModal(false)
    }

    const getDate = async (inputValue : any) => {
        const value = await inputValue.value;
        return value
    }
    
    const handleSubmit = async (e : any) => {
        e.preventDefault();

        let checkInData = "";
        let checkOutData  = "";

        if (checkIn && checkOut){
            checkInData = await getDate(checkIn)
            checkOutData = await getDate(checkOut)
        }
        const booking = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            order_date: e.target.order_date.value,
            check_in: checkInData,
            check_inTime: orderDate.toISOString(),
            check_out: checkOutData,
            check_OutTime: orderDate.toISOString(),
            booking_time: e.target.order_date.value,
            room_type: e.target.room_type.value,
            status: "Check In"
        };
        await dispatch(newBooking(booking))
        setModalAddToggler()
    }

    return (
        <ModalInfo>
            <div>
                <h1>Create Booking</h1>
                <IoCloseOutline onClick={() => setNewBookingModal(false)} />
            </div>
            <form action="/bookings" method="POST" onSubmit={handleSubmit} >
                <label htmlFor="first_name">First name</label>
                <input type="text" name="first_name" placeholder="e.g. John"/>
                <label htmlFor="last_name">Last name</label>
                <input type="text" name="last_name" placeholder="e.g. Cooper"/>
                <label htmlFor="check_in">Check in</label>
                <input type="date" name="check in" id="checkIn" />
                <label htmlFor="check_out">Check out</label>
                <input type="date" name="check_out" id="checkOut" />
                <label htmlFor="room_type">Room type</label>
                <select name="room_type">
                    <option value="Single Bed">Single Bed</option>
                    <option value="Double Bed">Double Bed</option>
                    <option value="Double Bed Superior">Double Bed Superior</option>
                    <option value="Suite">Suite</option>
                </select>
                <label htmlFor="order_date">Order date</label>
                <input className="inputDate" type="text" name="order_date" defaultValue={orderDate.toISOString().slice(0, 10)}/>
                <input type="submit" value="Add booking"/>
            </form> 
        </ModalInfo>
    )
}

const HiddenModalBox = () => {
    return (
        <br/>
    )
}



export function NewBookingModal({newBookingModal, setNewBookingModal}: props) {
    return (
        <>
        {newBookingModal ? <VisibleModalBox setNewBookingModal={setNewBookingModal}/> : <HiddenModalBox/>}
        </>
    )
}