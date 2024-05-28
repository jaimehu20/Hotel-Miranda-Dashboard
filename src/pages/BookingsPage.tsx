import { Table } from "../components/Table/TableBox"
import { SideBar } from '../components/SideBar/SideBar';
import { NavContainer } from '../components/NavBar/NavBar';
import { BookingFilter } from "../components/ListSelector/ListSelector";
import { FaEdit } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { getAll, getAllStatus, getAllError } from "../app/store/Bookings/BookingsSlice";
import { useEffect, useState } from "react";
import { fetchBookings } from "../app/store/Bookings/BookingsThunk";
import { filteredByName, filteredByStatus } from "../app/filters";
import { sortData } from "../app/filters";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import { button } from "../components/button/button";

type props = {
  title?: string;
}

function Bookings(props : props) {
  
  const dispatch = useAppDispatch();
  const multipleBookings = useAppSelector(getAll);
  const bookingStatus = useAppSelector(getAllStatus);
  const bookingsError = useAppSelector(getAllError);
  const [ searchInput, setSearchInput ] = useState<string>("");
  const [ statusFilter, setStatusFilter ] = useState("all");
  const [ choosen, setChoosen ] = useState<string>("all");
  let className : string = "";
  
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
    {property: 'guest', label: 'Guest', display: (item : any) => (<><Link to={`/bookings/${item.id}`}><p>{item.first_name} {item.last_name}</p><small>#{item.id}</small></Link></>)},
    {property: 'order_date', label: 'Order Date'},
    {property: 'check_in', label: 'Check In'},
    {property: 'check_out', label: 'Check Out'},
    {property: 'special,request', label: 'Special Request', display: (item : any) => (<button>View Notes</button>)},
    {property: 'room_type', label: 'Room Type'},
    {property: 'status', label: 'Status', display: (item : any) => {
      
      if (item.status === "Check In"){
        className = "checkin"
      } else if (item.status === "Check Out"){
        className = "checkout"
      } else if (item.status === "In Progress"){
        className = "inprogress"
      }
      return (
        <button className={className}>{item.status}</button>
      )
    }},
    {property: 'actions', label: 'Actions', display: (item : any) => (<div>
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
        <button />
      </main>
    </>
  )
}

export default Bookings;