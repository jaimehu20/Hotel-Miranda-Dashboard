import { FaHotel } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { SlKey } from "react-icons/sl";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import profilePic from "../../assets/user.webp"
import { useAuth } from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

export const LateralMenu = styled.div`
  height: 100vh;
  width: 250px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  box-shadow: 13px 3px 40px #00000005;
  padding-right: 0px;
  padding-left: 0px;
  background: #ffffff;
  @media only screen and (min-width: 1920px) {
    padding-right: 40px;
    padding-left: 40px; }
`
export const HiddenLateralMenu = styled.div`
  display: none;
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
    padding-bottom: 0px;
    cursor: pointer;
    @media only screen and (min-width: 1920px) {
      padding-bottom: 30px;
    }
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
  margin-top: 0px;
  @media only screen and (min-width: 1920px) {
    margin-bottom: 70px;
  }
  img {
    width: 85px;
    border-radius: 8px;
    height: 85px;
    object-fit: cover;
  }
  p:first-of-type{
    font-size: 16px;
    margin-bottom: 0px;
  }
  p:last-of-type{
    font-size: 12px;
    color: black; }
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
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 0px;
    margin-top: 0px;
    @media only screen and (min-width: 1920px) {
      margin-top: 16px;
      font-size: 16px }
  }
  p:last-of-type{
    font-size: 14px;
    color: #799283;
    margin-top: 0px;
  }
`

type props = {
  hidden: boolean;
}

export function SideBar(props : props) {

    const {logged} = useAuth();
    const { dispatch } = useAuth();

    return (
        <>
        {props.hidden ? (
          <HiddenLateralMenu />
        ) : (
          <LateralMenu>
            <Logo>
              <FaHotel />
              <div>
                  <p>travl</p>
                  <p>Hotel Admin Dashboard</p>
              </div>
            </Logo>
            <Options>
              <Link to="/home">
                <div>
                    <MdOutlineDashboard />
                    <p>Dashboard</p>
                </div>
              </Link>
              <Link to="/bookings">
                <div>
                    <FaRegCalendarCheck />
                    <p>Bookings</p>
                </div>
              </Link>
              <Link to="/rooms">
                <div>
                  <SlKey />
                  <p>Rooms</p>
                </div>
              </Link>
              <Link to="/contact">
                <div>
                    <MdConnectWithoutContact />
                    <p>Contact</p>
                </div>
              </Link>
              <Link to="/users">
                <div>
                  <FaUser />
                  <p>Users</p>
                </div>
              </Link>
            </Options>
            <UserData>
              <img src={profilePic}/>
              <p>Jaime Hurtado</p>
              <button onClick={() => dispatch('logout')}>Log Out</button>
            </UserData>
            <CopyText>
              <p>Travl Hotel Admin Dashboard</p>
              <p>© 2024 All Rights Reserved</p>
            </CopyText>
        </LateralMenu>
        )}
        </>
    )
}   