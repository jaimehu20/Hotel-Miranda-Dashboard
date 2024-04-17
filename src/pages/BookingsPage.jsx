import { Table } from "../components/Table/TableBox.jsx"
import { SideBar } from '../components/SideBar/SideBar';
import { NavContainer } from '../components/NavBar/NavBar';
import { Filter } from "../components/ListSelector/ListSelector.jsx";

function Bookings() {

  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Bookings" />
        <Filter/>
        <Table/>
      </main>
    </>
  )
}

export default Bookings;
