import { IoIosStats } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import styled from "styled-components";
import { useAuth } from "../../Hooks/useAuth";


const NavBar = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px;
  font-size: 28px;
  gap: 24px;
  svg {
    transform: rotate(90deg);
    cursor: pointer;
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

type props = {
  title: string;
  setHidden: any;
  hidden: boolean;
}

export function NavContainer(props : props) {

    const { dispatch } = useAuth();
    const handleClick = () => {
      props.setHidden(!props.hidden)
    }

    return (
        <nav>
          <NavBar>
            <IoIosStats onClick={handleClick} />
            <p>{props.title}</p>
          </NavBar>
          <Icons>
            <MdOutlineEmail />
            <CiBellOn />
            <IoLogOutOutline onClick={() => dispatch('logout')} />
          </Icons>
        </nav>
    )
}