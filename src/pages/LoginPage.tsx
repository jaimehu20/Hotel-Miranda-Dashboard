import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useAuth } from "../Hooks/useAuth";
import { useRef } from "react";


const LogForm = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #242424;
    width: 100%;
    height: 100vh;
    svg {
        background: #F8F8F8;
        padding: 10px;
        border-radius: 18px;
    }
    p:first-of-type {
        color: #ffffff;
        margin-bottom: 0px;
    }
    p:last-of-type {
        color: #ffffff;
        margin-top: 0px;
    }
    input {
        margin-top: 20px;
        padding: 10px 15px 10px 15px;
        font-family: 'Poppins';
    }
    input:first-of-type {
        margin-top: 10px;
        padding: 10px 15px 10px 15px;
    }
    input:last-of-type {
        padding: 10px 56px 10px 56px;
        cursor: pointer;
    }
`;


function LoginMenu() {
    
    const navigate = useNavigate();

    const {dispatch} = useAuth()

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const InputChecker = () => {
        const userName = usernameRef.current?.value;
        const password = passwordRef.current?.value;
    if (userName && password) {
        dispatch('login')
        navigate("/home");
    }
}
        return (
            <>
            <LogForm>
                <FaCircleUser />
                <p>Welcome to Hotel Miranda Dashboard</p>
                <p>Authorized personal only</p>
                <input ref={usernameRef} type="text" placeholder="abcdefg"/>
                <input ref={passwordRef} type="text" placeholder="123456789"/>
                <input type="submit" value="Log In" onClick={InputChecker}/>
            </LogForm>
         
            </>
        )
    }

export default LoginMenu;