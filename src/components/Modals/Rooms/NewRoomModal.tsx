import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5";
import { newRoom } from "../../../app/store/Rooms/RoomsThunk";
import { useAppDispatch } from "../../../Hooks/hooks";



const ModalInfo = styled.div`
    position: absolute;
    top: 500px;
    left: 1000px;
    flex-direction: column;
    width: 400px;
    height: 400px;
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
        align-self: flex-end;
        width: 30px;
        height: 30px;
    }
`

type props = {
    visible?: any,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


const VisibleModalBox = ({setVisible}: props) => {

    const dispatch = useAppDispatch();
    const setVisibleToggler = () => {
        setVisible(false)
    }

    const handleSubmit = async (e: any)  => {
        e.preventDefault();
        const rooms = {
            room_code: e.target.room_name.value,
            room_floor: e.target.room_floor.value,
            room_type: e.target.bed_type.value,
            room_amenities: e.target.room_amenities.value,
            room_rate: `$${e.target.room_price.value}`,
            room_status: "Available"
        };
        await dispatch(newRoom(rooms));
        setVisibleToggler();
}

    return (
        <ModalInfo>
            <IoCloseOutline onClick={() => setVisible(false)} />
            <form action="/rooms" method="POST" onSubmit={handleSubmit} >
                <label htmlFor="room_name">Room Name</label>
                <input type="text" name="room_name" placeholder="e.g. Deluxe A-38912"/>
                <label htmlFor="bed_type">Bed Type</label>
                <input type="text" name="bed_type" placeholder="e.g. Single Bed"/>
                <label htmlFor="room_price">Price Per Night<small>($)</small></label>
                <input type="text" name="room_price" placeholder="Type price only, coin not needed"/>
                <label htmlFor="room_floor">Room Floor</label>
                <select name="room_floor">
                    <option value="Floor A-1">Floor A-1</option>
                    <option value="Floor A-2">Floor A-2</option>
                    <option value="Floor A-3">Floor A-3</option>
                </select>
                <label htmlFor="room_amenities">Amenities</label>
                <textarea name="room_amenities" placeholder="Room amenities"/>
                <input type="submit" value="Add room"/>
            </form> 
        </ModalInfo>
    )
}

const HiddenModalBox = () => {
    return (
        <br/>
    )
}

export function NewRoomModal({visible, setVisible}: props) {
    return (
        <>
        {visible ? <VisibleModalBox setVisible={setVisible}/> : <HiddenModalBox/>}
        </>
    )
}

