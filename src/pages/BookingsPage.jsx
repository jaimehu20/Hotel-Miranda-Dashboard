import { Table } from "../components/Table/TableBox.jsx"
import { SideBar } from '../components/SideBar/SideBar';
import { NavContainer } from '../components/NavBar/NavBar';
import { Filter } from "../components/ListSelector/ListSelector.jsx";
import { FaEdit } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getAll, getOnly, getAllStatus, getAllError } from "../app/store/Bookings/BookingsSlice.js";
import { useEffect } from "react";
import { fetchBookings } from "../app/store/Bookings/BookingsThunk.js";

function Bookings(props) {
  
  const dispatch = useDispatch();
  const multipleBookings = useSelector(getAll);
  const individualBooking = useSelector(getOnly);
  const bookingStatus = useSelector(getAllStatus);
  const bookingsError = useSelector(getAllError); 
  
  useEffect(() => {
    if (bookingStatus === "pending"){
      console.log(bookingStatus);
    } else if (bookingStatus === "rejected"){
      console.log(bookingsError)
    } else if (bookingStatus === "fulfilled") {
      console.log(bookingStatus)
    } else if (bookingStatus === "idle") {
      dispatch(fetchBookings());
    }
    },[dispatch, multipleBookings])

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
        <Filter title="All Bookings"/>
        <Table columns={columns} data={multipleBookings}/>
      </main>
    </>
  )
}

export default Bookings;