import { SideBar } from "../components/SideBar/SideBar.jsx";
import { NavContainer } from "../components/NavBar/NavBar.jsx";
import { RoomsFilter } from "../components/ListSelector/ListSelector.js";
import { Table } from "../components/Table/TableBox.jsx";
import { NewRoomModal } from "../components/RoomModal/Modal.jsx";
import roomPic from "../assets/room1.jpg"
import { getAllRooms, getRoomError, getRoomsStatus } from "../app/store/Rooms/RoomsSlice.js";
import { useEffect, useState } from "react";
import { fetchRooms } from "../app/store/Rooms/RoomsThunk.js";
import { Link } from "react-router-dom";
import { filteredByRoomStatus } from "../app/filters.js";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks.js";

type props = {
  title?: string
}

function Rooms(props : props) {

  const dispatch = useAppDispatch();
  const multipleRooms = useAppSelector(getAllRooms);
  const roomStatus = useAppSelector(getRoomsStatus);
  const roomError = useAppSelector(getRoomError);
  const [ clicked, setClicked ] = useState("all");
  const [visible, setVisible ] = useState<boolean>(false)
  let className : string = "";

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

  const filteredRoomList : any = filteredByRoomStatus(multipleRooms, clicked);

  const columns = [
    {property: 'room_id', label: 'Room Name', display: (e : any) => (<>
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
    {property: "room_amenities", label:"Amenities", display: (e : any) => (<><div className="room-amenities">{e.room_amenities}</div></>)},
    {property: "room_rate", label: "Rate"},
    {property: "room_status", label: "Status", display: (e : any) => {
      
      if (e.room_status === "Available"){
        className = "available"
      } else if (e.room_status === "Booked"){
        className = "booked"
      }
      return (
      <button className={className}>{e.room_status === 'Available' ? 'Available' : 'Booked'}</button>
    )
    } }
  ]

  return (
    <>
      <SideBar />
      <main>
        <NavContainer title="Rooms" />
        <RoomsFilter setClicked={setClicked} setVisible={setVisible}/>
        <Table columns={columns} data={filteredRoomList}/>
        <NewRoomModal visible={visible} setVisible={setVisible}/>
      </main>
    </>
  )
}

export default Rooms;