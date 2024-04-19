import { SideBar } from "../components/SideBar/SideBar"
import { NavContainer } from "../components/NavBar/NavBar"

export function RoomDetails() {
    return (
        <>
            <SideBar />
            <main className="contact-container">
                <NavContainer title="Room Details" />
                <p>Room details</p>
            </main>
    </>
    )
}