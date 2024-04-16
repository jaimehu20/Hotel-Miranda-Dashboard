import { IoIosStats } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { SlKey } from "react-icons/sl";
import { MdConnectWithoutContact } from "react-icons/md";
import { LateralMenu } from "./IndexPage.jsx"
import { Logo } from "./IndexPage.jsx"
import { Options } from "./IndexPage.jsx"
import { UserData } from "./IndexPage.jsx"
import { CopyText } from "./IndexPage.jsx"
import { NavBar } from "./IndexPage.jsx"
import { Icons } from "./IndexPage.jsx"
import { OptionList } from '../components/ListSelector/ListSelector.jsx'; 
import { Table } from "../components/Table/TableBox.jsx"

function Bookings() {
  return (
    <>
      <LateralMenu>
        <Logo>
          <FaHotel />
          <div>
            <p>travl</p>
            <p>Hotel Admin Dashboard</p>
          </div>
        </Logo>
        <Options>
          <div>
            <MdOutlineDashboard />
            <p>Dashboard</p>
          </div>
          <div>
            <FaRegCalendarCheck />
            <p>Bookings</p>
          </div>
          <div>
            <SlKey />
            <p>Rooms</p>
          </div>
          <div>
            <MdConnectWithoutContact />
            <p>Contact</p>
          </div>
          <div>
            <FaUser />
            <p>Users</p>
          </div>
        </Options>
        <UserData>
          <img src="./src/assets/profilePic.jpg"/>
          <p>Jaime Hurtado</p>
          <p>jaimehu.dev@gmail.com</p>
          <button>Contact Us</button>
        </UserData>
        <CopyText>
          <p>Travl Hotel Admin Dashboard</p>
          <p>© 2024 All Rights Reserved</p>
        </CopyText>
      </LateralMenu>
      <main>
        <nav>
          <NavBar>
        <IoIosStats />
        <p>Bookings</p>
          </NavBar>
          <Icons>
            <MdOutlineEmail />
            <CiBellOn />
            <IoLogOutOutline />
          </Icons>
        </nav>
        <OptionList/>
        <Table/>
      </main>
    </>
  )
}

export default Bookings;
