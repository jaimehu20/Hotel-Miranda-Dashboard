import { SideBar } from "../components/SideBar/SideBar";
import { NavContainer } from "../components/NavBar/NavBar";
import { Filter3 } from "../components/ListSelector/ListSelector.jsx";
import { Table } from "../components/Table/TableBox.jsx"
import { data } from "../app/RoomsList.js";
import roomPic from "../assets/room1.jpg"


function Rooms(props) {

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
        <Table columns={columns} data={data}/>
      </main>
    </>
  )
}

export default Rooms;