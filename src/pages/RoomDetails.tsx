import { SideBar } from "../components/SideBar/SideBar"
import { NavContainer } from "../components/NavBar/NavBar"
import { getRoom } from "../app/store/Rooms/RoomsSlice";
import { useEffect, useState } from "react";
import { fetchRoom } from "../app/store/Rooms/RoomsThunk";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";

export function RoomDetails() {

    let { id } = useParams();
    const dispatch = useAppDispatch();
    const individualRoom = useAppSelector(getRoom);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        if (!id) return
        setLoading(false);
        dispatch(fetchRoom(id));
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
                        <p>{`This is a ${individualRoom.room_type} room.`}</p>
                        <p>{`Its code is ${individualRoom.room_code}.`}</p>
                        <p>{`The room is located in: ${individualRoom.room_floor}.`}</p>
                        <p>{`The room amenities are: ${individualRoom.room_amenities}.`}</p>
                        <p>{`Price for this room is ${individualRoom.room_rate}.`}</p>
                        <h1>{`Status: ${individualRoom.room_status}`}</h1>
                    </main>
                </>
            }
        </>
    )
}