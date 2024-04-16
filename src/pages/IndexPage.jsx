import styled from 'styled-components'
import { IoIosStats } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuArrowRightFromLine } from "react-icons/lu";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import { SlKey } from "react-icons/sl";
import { MdConnectWithoutContact } from "react-icons/md";


export const LateralMenu = styled.div`
  height: 100vh;
  width: 250px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  box-shadow: 13px 3px 40px #00000005;
  padding-right: 40px;
  padding-left: 40px;
`
export const Logo = styled.div`
margin-left: 32px;
svg {
  padding-top: 28px;
  padding-right: 10px;
  width: 50px;
  height: 50px;
  fill: #135846;
}
  div {
    flex-direction: column;
    padding-left: 15px;
  }
  p:first-of-type {
    margin-bottom: 0px;
    margin-top: 28px;
    font-weight: bold;
    font-size: 34px;
    line-height: 31px;
  }
  p:last-of-type {
    margin-top: 0px;
    margin-bottom: 0px;
    width: 158px;
    font-size: 12px;
    color: #5D5449;
  }
`;
export const Options = styled.div`
  flex-direction: column;
  font-size: 18px;
  color: #799283;
  transition: all 3s ease;
  width: 80%;
  div:hover{
    color: red;
    font-weight: bold;
  }
  div {
    align-items: center;
    gap: 1em;
    padding-bottom: 30px;
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
export const UserData = styled.div`
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  box-shadow: 0px 20px 30px #00000014;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 26px;
  margin-top: 70px;
  img {
    width: 70px;
    border-radius: 8px;
    height: 90px;
    object-fit: cover;
  }
  p:first-of-type{
    font-size: 16px;
    margin-bottom: 0px;
  }
  p:last-of-type{
    font-size: 12px;
    color: lightgray;
  }
  button{
    background: #EBF1EF;
    font-weight: bold;
    color: #135846;
    margin-top: 10px;
    padding: 12px 38px 12px 38px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`
export const CopyText = styled.div`
flex-direction: column;
  p:first-of-type{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0px;
  }
  p:last-of-type{
    font-size: 14px;
    color: #799283;
    margin-top: 0px;
  }
`
export const NavBar = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px;
  font-size: 28px;
  gap: 24px;
  svg {
    transform: rotate(90deg);
  }
`;
export const Icons = styled.div`
  display:flex;
  align-items: center;
  gap: 24px;
  margin-right: 140px;
  height: 80px;
  svg {
    width: 22px;
    height: 22px;
    color: #135846;
    cursor: pointer;
  }
  p {
    color: red;
  }
`;
const Stats = styled.section`
  display: flex;
  justify-content: space-around;
  padding-top: 50px;
  background: #F8F8F8;
  height: 100vh;
`
const StatsContainer = styled.div`
  align-items: center;
  gap: 2em;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  padding: 0px 104px 0px 45px;
  background: #ffffff;
  min-width: 164px;
  height: 90px;
  transition: all 1s ease-out ;
  &:hover {
   
    transform: scale(1.2); 
    svg {
      background: #E23428;
      color: #ffffff;
    }
  }
  svg {
    width: 28px;
    height: 28px;
    background: #FFEDEC;
    padding: 10px;
    border-radius: 9px;
    color: #E23428;
  }
  div {
    flex-direction: column;
    padding-top: 10px;
    p:first-of-type {
      margin-bottom: 0px;
      margin-top: 0px;
      font-size: 30px;
      font-weight: 600;
    }
    p:last-of-type {
      margin-top: 0px;
      font-size: 14px;
      color: #787878;
    }
  }
`

function Home() {
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
        <p>Dashboard</p>
          </NavBar>
          <Icons>
            <MdOutlineEmail />
            <CiBellOn />
            <IoLogOutOutline />
          </Icons>
        </nav>
        <Stats>
          <StatsContainer>
            <IoBedOutline />
            <div>
              <p>8,461</p>
              <p>New Booking</p>
            </div>
          </StatsContainer>
          <StatsContainer>
            <FaRegCalendarCheck />
            <div>
              <p>963</p>
              <p>Scheduled Room</p>
            </div>
          </StatsContainer>
          <StatsContainer>
            <LuArrowRightFromLine />
            <div>
              <p>753</p>
              <p>Check In</p>
            </div>
          </StatsContainer>
          <StatsContainer>
            <LuArrowLeftFromLine />
            <div>
              <p>516</p>
              <p>Check Out</p>
            </div>
          </StatsContainer>
        </Stats>
      </main>
    </>
  )
}

export default Home;
