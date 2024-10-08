import { SideBar } from "../components/SideBar/SideBar.jsx";
import { NavContainer } from "../components/NavBar/NavBar.jsx";
import { RoomsFilter } from "../components/ListSelector/ListSelector.js";
import { Table } from "../components/Table/TableBox.jsx";
import { NewRoomModal } from "../components/Modals/Rooms/NewRoomModal.js";
import { EditRoomModal } from "../components/Modals/Rooms/EditRoomModal.js"
import { FaEdit } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import room1 from "../assets/room1.webp"
import room2 from "../assets/room2.jpg"
import luxuryRoom from "../assets/luxuryRoom.webp"
import luxuryDoubleBed from "../assets/luxuryDoubleBed.webp"
import { getAllRooms } from "../app/store/Rooms/RoomsSlice.js";
import { useEffect, useState } from "react";
import { fetchRooms } from "../app/store/Rooms/RoomsThunk.js";
import { Link } from "react-router-dom";
import { filteredByRoomStatus } from "../app/filters.js";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks.js";
import { DeleteRoomModal } from "../components/Modals/Rooms/DeleteRoomModal.js";
import { LoadingContent } from "../components/Icons/LoadingContent.js";

type props = {
  title?: string
}

function Rooms(props : props) {

  const dispatch = useAppDispatch();
  const multipleRooms = useAppSelector(getAllRooms);
  const [ clicked, setClicked ] = useState<string>("all");
  const [ modalAdd, setModalAdd ] = useState<boolean>(false);
  const [ modalEdit, setModalEdit ] = useState<boolean>(false);
  const [ modalDelete, setModalDelete ] = useState<boolean>(false);
  const [ loaded, setLoaded ] = useState<boolean>(false);
  const [ id, setId ] = useState<string>("");
  const [ hidden, setHidden ] = useState<boolean>(false);
  let className : string = "";

  useEffect(() => {
    const fetcher = async () => {
      await dispatch(fetchRooms());
      setLoaded(true);
    }
    fetcher();
      
  },[])
  
  const getBookingImage = (roomType : string) => {
    switch (roomType) {
        case 'Single Bed':
            return room1;
        case 'Double Bed':
            return room2
        case 'Double Bed Superior':
            return luxuryDoubleBed
        case 'Suite':
            return luxuryRoom
        default:
            return room1
    }
};

  const filteredRoomList : any = filteredByRoomStatus(multipleRooms, clicked);
  

  const columns = [
    {property: '_id', label: 'Room Name', display: (item : any) => (<>
    <Link to={`/rooms/${item._id}`}>
      <div className="room-container">
        <img src={getBookingImage(item.room_type)}/>
        <div>
          <p>#{item._id.slice(0, 8).toUpperCase()}</p>
          <p>{item.room_code}</p>
        </div>
      </div>
    </Link>
    </>)},
    {property: "room_type", label:"Bed Type"},
    {property: "room_floor", label:"Room Floor"},
    {property: "room_amenities", label:"Amenities", display: (item : any) => (<><div className="room-amenities">{item.room_amenities}</div></>)},
    {property: "room_rate", label: "Rate", display: (item: any) => (<><p>${item.room_rate}</p></>)},
    {property: "room_status", label: "Status", display: (item : any) => {
      
      if (item.room_status === "Available"){
        className = "greenButton"
      } else if (item.room_status === "Booked"){
        className = "redButton"
      }
      return (
      <button className={className}>{item.room_status === 'Available' ? 'Available' : 'Booked'}</button>
    )
    }},
    {property: 'actions', label: 'Actions', display: (item : any) => (<div>
      <FaEdit onClick={() => {setModalEdit(true), setModalDelete(false), setId(item)}}/>
      <RxCrossCircled onClick={() => {setModalDelete(true), setModalEdit(false), setId(item)}}/>
    </div>)}
  ]

  return (
    <>
      <SideBar hidden={hidden} />
      <main>
        <NavContainer title="Rooms" setHidden={setHidden} hidden={hidden} />
        <RoomsFilter setClicked={setClicked} setModalAdd={setModalAdd}/>
        {!loaded ? <LoadingContent /> : <Table columns={columns} data={filteredRoomList}/>}
        <NewRoomModal modalAdd={modalAdd} setModalAdd={setModalAdd}/>
        <EditRoomModal modalEdit={modalEdit} setModalEdit={setModalEdit} id={id} />
        <DeleteRoomModal modalDelete={modalDelete} setModalDelete={setModalDelete} id={id}/>
      </main>
    </>
  )
}

export default Rooms;