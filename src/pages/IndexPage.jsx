import styled from 'styled-components'
import { IoIosStats } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineTextsms } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";


const LateralMenu = styled.div`
  height: 100vh;
  width: 250px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  box-shadow: 13px 3px 40px #00000005;
  padding-right: 40px;
  padding-left: 40px;
`
const Logo = styled.div`
margin-left: 32px;
font-family: 'Poppins';
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
const Options = styled.div`
  flex-direction: column;
  font-family: 'Poppins';
  font-size: 18px;
  color: #799283;
  transition: all 3s ease;
  width: 80%;
  p:hover{
    color: red;
  }
`;
const UserData = styled.div`
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins';
  border-radius: 18px;
  box-shadow: 0px 20px 30px #00000014;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 26px;
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
    font-family: 'Poppins';
    font-weight: bold;
    color: #135846;
    margin-top: 10px;
    padding: 12px 38px 12px 38px;
    border-radius: 8px;
    border: none;
  }
`
const CopyText = styled.div`
font-family: 'Poppins';
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
const Cuadrado = styled.div`
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
const Icons = styled.div`
  display:flex;
  align-items: center;
  gap: 24px;
  margin-right: 40px;
  height: 80px;
`;
const User = styled.div`
  background: lightgray;
  padding: 10px;
  padding-right: 13px;
  padding-left: 13px;
  border-radius: 20%;
`;

function Mew() {
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
          <p>Dashboard</p>
          <p>Room</p>
          <p>Bookings</p>
          <p>Guest</p>
          <p>Concierge</p>
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
      <nav>
        <Cuadrado>
        <IoIosStats />
        <p>Dashboard</p>
        </Cuadrado>
        <Icons>
          <FaMagnifyingGlass />
          <CiHeart />
          <MdOutlineEmail />
          <CiBellOn />
          <MdOutlineTextsms />
          <User>
            <FaUser />
          </User>
          <p>EN</p>
        </Icons>
      </nav>
      
    </>
  )
}

export default Mew
