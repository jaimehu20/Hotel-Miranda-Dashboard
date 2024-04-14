import { RiHotelLine } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

function App() {
  
  return (
    <>
      <div className="navBar">
        <div className="navBar-logo">
          <RiHotelLine />
          <p>Dashboard</p>
        </div>
          <div className="navBar-container">
            <HiMagnifyingGlass />
            <CiHeart />
            <MdOutlineMailOutline />
            <FaRegBell />
            <MdOutlineTextsms />
          </div>  
      </div>
        
    </>
  )
}

export default App
