import styled from "styled-components"
import { IoCloseOutline } from "react-icons/io5";
import { editRoom } from "../../../app/store/Rooms/RoomsThunk";
import { useAppDispatch } from "../../../Hooks/hooks";

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
    const setModalEditToggler = () =>{
        setModalEdit(false);
    }

    const handleSubmit = async (e : any,) => {
        e.preventDefault();
        const editedRoom : any = {
            room_code: e.target.room_name.value || id.room_code,
            room_floor: e.target.room_floor.value || id.room_floor,
            room_type: e.target.bed_type.value || id.room_type,
            room_amenities: e.target.room_amenities.value || id.room_amenities,
            room_rate: `${e.target.room_price.value}` || id.room_rate,
        };
        const data = {id: id._id, data: editedRoom}
        await dispatch(editRoom(data));
        setModalEditToggler();
    }
    
return (
    <ModalInfo>
        <div>
            <h1>Edit Room</h1>
            <IoCloseOutline onClick={() => setModalEdit(false)}/>
        </div>
        <p>Modify all or only those fields you need</p>
        <form action="/rooms" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="room_name">Room Name</label>
                <input type="text" name="room_name" defaultValue={id.room_code}/>
                <label htmlFor="bed_type">Bed Type</label>
                <input type="text" name="bed_type" defaultValue={id.room_type}/>
                <label htmlFor="room_price">Price Per Night<small>($)</small></label>
                <input type="text" name="room_price" defaultValue={id.room_rate}/>
                <label htmlFor="room_floor">Room Floor</label>
                <select name="room_floor">
                    <option value="Floor A-1">Floor A-1</option>
                    <option value="Floor A-2">Floor A-2</option>
                    <option value="Floor A-3">Floor A-3</option>
                </select>
                <label htmlFor="room_amenities">Amenities</label>
                <textarea name="room_amenities" defaultValue={id.room_amenities}/>
                <input type="submit" value="Edit room"/>
            </form> 
    </ModalInfo>
)
}

const HiddenModalBox = () => {
    return <></>
}

export function EditRoomModal({modalEdit, setModalEdit, id}: props) {
    return (
        <>
        {modalEdit ? <VisibleModalBox setModalEdit={setModalEdit} id={id} /> : <HiddenModalBox/>}
        </>
    )
}