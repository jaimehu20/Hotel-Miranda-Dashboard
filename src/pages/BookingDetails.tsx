import { SideBar } from "../components/SideBar/SideBar"
import { NavContainer } from "../components/NavBar/NavBar"
import { useParams } from "react-router";
import { getOnly } from "../app/store/Bookings/BookingsSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { fetchBooking } from "../app/store/Bookings/BookingsThunk";
import { BookingData } from "../components/BookingData/BookingData";
import { LoadingContent } from "../components/Icons/LoadingContent";


export function BookingDetails() {

    let { id } = useParams();
    const dispatch = useAppDispatch();
    const fetchedBooking = useAppSelector(getOnly);
    const [ loaded, setLoaded ] = useState<boolean>(false);
    const [ hidden, setHidden ] = useState<boolean>(false);

    useEffect(() => {
        const fetcher = async () => {
            if (!id) return
            await dispatch(fetchBooking(id))
            setLoaded(true);
        }
        fetcher()
    }, [])

    return (
        <>
            <SideBar hidden={hidden} />
            <main className="contact-container">
                <NavContainer title="Booking Details" setHidden={setHidden} hidden={hidden} />
                {!loaded ? <LoadingContent /> : <BookingData fetchedBooking={fetchedBooking} id={id}/>}
            </main>
        </>
    )
}