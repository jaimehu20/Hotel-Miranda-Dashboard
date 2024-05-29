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
    const fetchedRoom = useAppSelector(getRoom);
    const [ loaded, setLoaded ] = useState<boolean>(false)

    useEffect(() => {
        const fetcher = async () => {
            if (!id) return
            await dispatch(fetchRoom(id));
            setLoaded(true)
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
                        <p>{`This is a ${fetchedRoom.individualRoom.room_type} room.`}</p>
                        <p>{`Its code is ${fetchedRoom.individualRoom.room_code}.`}</p>
                        <p>{`The room is located in: ${fetchedRoom.individualRoom.room_floor}.`}</p>
                        <p>{`The room amenities are: ${fetchedRoom.individualRoom.room_amenities}.`}</p>
                        <p>{`Price for this room is ${fetchedRoom.individualRoom.room_rate}.`}</p>
                        <h1>{`Status: ${fetchedRoom.individualRoom.room_status}`}</h1>
                    </main>
        </>
    )
}