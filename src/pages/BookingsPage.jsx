import { Table } from "../components/Table/TableBox.jsx"
import { SideBar } from '../components/SideBar/SideBar';
import { NavContainer } from '../components/NavBar/NavBar';
import { Filter } from "../components/ListSelector/ListSelector.jsx";
import { data } from "../app/OrderData.js"
import { FaEdit } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

function Bookings(props) {

  const columns = [
    {property: 'guest', label: 'Guest', display: item => (<><p>{item.first_name} {item.last_name}</p><small>#{item.id}</small></>)},
    {property: 'order_date', label: 'Order Date'},
    {property: 'check_in', label: 'Check In'},
    {property: 'check_out', label: 'Check Out'},
    {property: 'special,request', label: 'Special Request', display: item => (<button>View Notes</button>)},
    {property: 'room_type', label: 'Room Type'},
    {property: 'status', label: 'Status', display: item => (<button>Check In</button>)},
    {property: 'actions', label: 'Actions', display: item => (<div>
      <FaEdit />
      <RxCrossCircled />
    </div>)}
];
  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Bookings" />
        <Filter/>
        <Table columns={columns} data={data}/>
      </main>
    </>
  )
}

export default Bookings;
