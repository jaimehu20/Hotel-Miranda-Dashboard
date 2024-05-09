import { SideBar } from "../components/SideBar/SideBar"
import { NavContainer } from "../components/NavBar/NavBar"
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getOnly } from "../app/store/Bookings/BookingsSlice";
import { useEffect, useState } from "react";
import { useAppSelector } from "../Hooks/hooks";
import { fetchBooking } from "../app/store/Bookings/BookingsThunk";
import { AppDispatch } from "../app/store/store";

export function BookingDetails() {

    let { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const individualBooking = useAppSelector(getOnly);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        if (!id) return
        setLoading(false);
        dispatch(fetchBooking(id))
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
                        <p>{`Este es el booking con id #${id}`}</p>
                        <p>{`La reserva se hizo en la fecha: ${individualBooking.order_date}`}</p>
                        <p>{`La fecha del Check In es: ${individualBooking.check_in} y la fecha del Check Out es: ${individualBooking.check_out}`}</p>
                        <p>{`El tipo de habitación es: ${individualBooking.room_type}`}</p>
                        <p>{`Actualmente, el estado de la reserva es: ${individualBooking.status}`}</p>
                    </main>
            </>
            }
        </>
    )
}