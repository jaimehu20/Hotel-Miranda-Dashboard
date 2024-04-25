import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { EmployeesFilter } from "../components/ListSelector/ListSelector.jsx";
import { Table } from "../components/Table/TableBox.jsx"
import roomPic from "../assets/room1.jpg"
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms, getRoom, getRoomError, getRoomsStatus } from "../app/store/Rooms/RoomsSlice.js";
import { useEffect } from "react";
import { fetchRooms, fetchRoom } from "../app/store/Rooms/RoomsThunk.js";
import { Link } from "react-router-dom";


function Rooms(props) {

  const dispatch = useDispatch();
  const multipleRooms = useSelector(getAllRooms);
  const roomStatus = useSelector(getRoomsStatus);
  const roomError = useSelector(getRoomError);

  useEffect(() => {
    if (roomStatus === "pending") {
      // Petición pendiente
    } else if (roomStatus === "rejected"){
      console.log(roomError);
    } else if (roomStatus === "fulfilled") {
      // Petición correcta
    } else if (roomStatus === "idle"){
      dispatch(fetchRooms());
    }
  })

  const columns = [
    {property: 'room_id', label: 'Room Name', display: e => (<>
    <Link to={`/rooms/${e.room_id}`}>
      <div className="room-container">
        <img src={roomPic}/>
        <div>
          <p>#{e.room_id}</p>
          <p>{e.room_code}</p>
        </div>
      </div>
    </Link>
    </>)},
    {property: "room_type", label:"Bed Type"},
    {property: "room_floor", label:"Room Floor"},
    {property: "room_amenities", label:"Amenities", display: e => (<><div className="room-amenities">{e.room_amenities}</div></>)},
    {property: "room_rate", label: "Rate"},
    {property: "room_status", label: "Status", display: e => (<button>{e.room_status === 'Available' ? 'Available' : 'Booked'}</button>)}
  ]

  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Rooms" />
        <EmployeesFilter />
        <Table columns={columns} data={multipleRooms}/>
      </main>
    </>
  )
}

export default Rooms;

