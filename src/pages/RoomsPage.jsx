import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";



function Rooms() {
  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Rooms" />
      </main>
    </>
  )
}

export default Rooms;