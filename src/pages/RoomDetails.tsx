import { SideBar } from "../components/SideBar/SideBar"
import { NavContainer } from "../components/NavBar/NavBar"
import { getRoom } from "../app/store/Rooms/RoomsSlice";
import { useEffect, useState } from "react";
import { fetchRoom } from "../app/store/Rooms/RoomsThunk";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { RoomData } from "../components/RoomData/RoomData";
import { LoadingContent } from "../components/Icons/LoadingContent";

export function RoomDetails() {

    let { id } = useParams();
    const dispatch = useAppDispatch();
    const fetchedRoom = useAppSelector(getRoom);
    const [ loaded, setLoaded ] = useState<boolean>(false);
    const [ hidden, setHidden ] = useState<boolean>(false);

    useEffect(() => {
        const fetcher = async () => {
            if (!id) return
            await dispatch(fetchRoom(id));
            setLoaded(true)
        }
        fetcher()
    }, [])
    
    return (
        <>
            <SideBar hidden={hidden} />
            <main className="contact-container">
                <NavContainer title="Room Details" setHidden={setHidden} hidden={hidden} />
                {!loaded ? <LoadingContent /> : <RoomData fetchedRoom={fetchedRoom} id={id}/>}
            </main>
        </>
    )
}