import { SideBar } from "../components/SideBar/SideBar"
import { NavContainer } from "../components/NavBar/NavBar"
import { useParams } from "react-router";
import { getOnly } from "../app/store/Bookings/BookingsSlice";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { fetchBooking } from "../app/store/Bookings/BookingsThunk";


export function BookingDetails() {

    let { id } = useParams();
    const dispatch = useAppDispatch();
    const fetchedBooking = useAppSelector(getOnly);
    const [ loaded, setLoaded ] = useState<boolean>(false);

    useEffect(() => {
        const fetcher = async () => {
            if (!id) return
            await dispatch(fetchBooking(id))
            setLoaded(true);
        }
        fetcher()
    }, [])

    if (!loaded){
        return (
            <>
                <p>Loading content...</p>
            </>
        )
    }

    return (
        <>
            <SideBar />
            <main className="contact-container">
                <NavContainer title="Room Details" />
                <p>{`Este es el booking con id #${id?.slice(0, 10).toUpperCase()}`}</p>
                <p>{`La reserva se hizo en la fecha: ${fetchedBooking.order_date.slice(0, 10)}`}</p>
                <p>{`La fecha del Check In es: ${fetchedBooking.check_in.slice(0, 10)} y la fecha del Check Out es: ${fetchedBooking.check_out.slice(0, 10)}`}</p>
                <p>{`El tipo de habitación es: ${fetchedBooking.room_type}`}</p>
                <p>{`Actualmente, el estado de la reserva es: ${fetchedBooking.status}`}</p>
            </main>
        </>
    )
}