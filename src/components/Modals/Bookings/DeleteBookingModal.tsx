import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch } from "../../../Hooks/hooks";
import { deleteBooking } from "../../../app/store/Bookings/BookingsThunk";

const ModalInfo = styled.div`
    position: absolute;
    top: 500px;
    left: 1000px;
    display: flex;
    flex-direction: column;
    width: 400px;
    background: #c0bdbd;
    border-radius: 10px;
    padding: 10px 20px 20px 20px;
    border: 1px solid black;
    h1 {
        margin-bottom: 0px;
    }
    svg {
        cursor: pointer;
        width: 30px;
        height: 30px;
    }
    div {
        justify-content: space-between;
    }
    div:last-child{
            justify-content: space-around;
        }
`

type props = {
    modalDelete: any,
    setModalDelete: React.Dispatch<React.SetStateAction<boolean>>,
    id: any
}

const VisibleModalBox = ({setModalDelete, id}: props) => {

    const dispatch = useAppDispatch();
    const setModalDeleteToggler = () =>{
        setModalDelete(false);
    }

    const handleSubmit = async () => {
        await dispatch(deleteBooking(id._id));
        setModalDeleteToggler();
    }

    return (
        <ModalInfo>
                <div>
                    <h1>Delete Booking</h1>
                    <IoCloseOutline onClick={() => setModalDelete(false)} />
                </div>
                <p>Booking data will be deleted and cannot be recovered! Are you sure you want to continue?</p>
                <div>
                    <button className="redButton modalButton" onClick={handleSubmit}>DELETE</button>
                    <button className="greenButton modalButton" onClick={() => setModalDelete(false)}>CANCEL</button>
                </div>  
        </ModalInfo>
    )
}

const HiddenModalBox = () => {
    return (
        <br/>
    )
}

export function DeleteBookingModal({modalDelete, setModalDelete, id}: props) {
    return (
        <>
        {modalDelete ? <VisibleModalBox setModalDelete={setModalDelete} modalDelete={modalDelete} id={id}/> : <HiddenModalBox/>}
        </>
    )
}