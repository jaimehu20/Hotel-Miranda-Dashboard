import { IoIosStats } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import styled from "styled-components";
import { useNavigate } from "react-router";


const NavBar = styled.div`
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

export function NavContainer(props) {

    const navigate = useNavigate();

    return (
        <nav>
          <NavBar>
            <IoIosStats />
            <p>{props.title}</p>
          </NavBar>
          <Icons>
            <MdOutlineEmail />
            <CiBellOn />
            <IoLogOutOutline onClick={() => {localStorage.removeItem("AUTH_LS_KEY"); navigate("/login")}} />
          </Icons>
        </nav>
    )
}