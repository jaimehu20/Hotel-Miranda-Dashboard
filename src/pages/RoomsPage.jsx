import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { Filter3 } from "../components/ListSelector/ListSelector.jsx";
import { Table } from "../components/Table/TableBox.jsx"
import { data } from "../data/RoomsList.js";
import roomPic from "../assets/room1.jpg"
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms, getRoom, getRoomError, getRoomsStatus } from "../app/store/Rooms/RoomsSlice.js";
import { useEffect } from "react";
import { fetchRooms } from "../app/store/Rooms/RoomsThunk.js";


function Rooms(props) {

  const dispatch = useDispatch();
  const multipleRooms = useSelector(getAllRooms);
  const individualRoom = useSelector(getRoom);
  const roomStatus = useSelector(getRoomsStatus);
  const roomError = useSelector(getRoomError);

  useEffect(() => {
    if (roomStatus === "pending") {
      console.log(roomStatus);
    } else if (roomStatus === "rejected"){
      console.log(roomError);
    } else if (roomStatus === "fulfilled") {
      console.log(roomStatus);
    } else if (roomStatus === "idle"){
      dispatch(fetchRooms());
    }
  })

  const columns = [
    {property: 'room_id', label: 'Room Name', display: e => (<>
      <div className="room-container">
        <img src={roomPic}/>
        <div>
          <p>{e.room_id}</p>
          <p>{e.room_code}</p>
        </div>
      </div>
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
        <Filter3 />
        <Table columns={columns} data={multipleRooms}/>
      </main>
    </>
  )
}

export default Rooms;