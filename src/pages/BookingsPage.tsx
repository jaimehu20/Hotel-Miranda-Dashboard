import { Table } from "../components/Table/TableBox.jsx"
import { SideBar } from '../components/SideBar/SideBar.jsx';
import { NavContainer } from '../components/NavBar/NavBar.jsx';
import { BookingFilter } from "../components/ListSelector/ListSelector.js";
import { FaEdit } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getAll, getAllStatus, getAllError } from "../app/store/Bookings/BookingsSlice.js";
import { useEffect, useState } from "react";
import { fetchBookings } from "../app/store/Bookings/BookingsThunk.js";
import { filteredByName, filteredByStatus } from "../app/filters.js";
import { sortData } from "../app/filters.js";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../Hooks/hooks.js";

function Bookings(props) {
  
  const dispatch = useAppDispatch();
  const multipleBookings = useAppSelector(getAll);
  const bookingStatus = useAppSelector(getAllStatus);
  const bookingsError = useAppSelector(getAllError);
  const [ searchInput, setSearchInput ] = useState<string>("");
  const [ statusFilter, setStatusFilter ] = useState("all");
  const [ choosen, setChoosen ] = useState<string>("all");
  
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
    
  let filteredBookingList = filteredByName(multipleBookings, searchInput);
      filteredBookingList = filteredByStatus(filteredBookingList, statusFilter);
      filteredBookingList = sortData(filteredBookingList, choosen);
      

  const columns = [
    {property: 'guest', label: 'Guest', display: item => (<><Link to={`/bookings/${item.id}`}><p>{item.first_name} {item.last_name}</p><small>#{item.id}</small></Link></>)},
    {property: 'order_date', label: 'Order Date'},
    {property: 'check_in', label: 'Check In'},
    {property: 'check_out', label: 'Check Out'},
    {property: 'special,request', label: 'Special Request', display: item => (<button>View Notes</button>)},
    {property: 'room_type', label: 'Room Type'},
    {property: 'status', label: 'Status', display: item => (<button>{item.status}</button>)},
    {property: 'actions', label: 'Actions', display: item => (<div>
      <FaEdit />
      <RxCrossCircled />
    </div>)}
];

  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Bookings"  />
        <BookingFilter title="All Bookings" setSearchInput={setSearchInput} setStatusFilter={setStatusFilter} setChoosen={setChoosen} choosen={choosen}/>
        <Table columns={columns} data={filteredBookingList}/>
      </main>
    </>
  )
}

export default Bookings;