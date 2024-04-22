import { FaHotel } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { SlKey } from "react-icons/sl";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router";
import profilePic from "../../assets/profilePic.jpg"
import { useAuth } from "../../Hooks/useAuth";

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

export function SideBar() {

  const navigate = useNavigate();

    const {logged} = useAuth();
    console.log(logged)

    return (
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
                <p onClick={() => {navigate("/home")}}>Dashboard</p>
            </div>
            <div>
                <FaRegCalendarCheck />
                <p onClick={() => {navigate("/bookings")}}>Bookings</p>
            </div>
            <div>
                <SlKey />
                <p onClick={() => {navigate("/rooms")}}>Rooms</p>
            </div>
            <div>
                <MdConnectWithoutContact />
                <p onClick={() => {navigate("/contact")}}>Contact</p>
            </div>
            <div>
                <FaUser />
                <p onClick={() => {navigate("/users")}}>Users</p>
            </div>
            </Options>
            <UserData>
            <img src={profilePic}/>
            <p>{logged.userName}</p>
            <p>jaimehu.dev@gmail.com</p>
            <button>Contact Us</button>
            </UserData>
            <CopyText>
            <p>Travl Hotel Admin Dashboard</p>
            <p>© 2024 All Rights Reserved</p>
            </CopyText>
        </LateralMenu>
    )
}   