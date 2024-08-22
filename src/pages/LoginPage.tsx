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

    const login = async (e: any) => {
        e.preventDefault();
        const email = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await fetch(import.meta.env.VITE_URL + 'login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        })
        const loginData = await response.json();
        if (response.ok){
            localStorage.setItem('authTOKEN', loginData.token);
            dispatch('login')
            if(localStorage.getItem("authTOKEN") != null){
                navigate("/home")
            }
        } else {
            alert("Login failed or login data is missing, try again")
        }
    }
        return (
            <>
            <LogForm>
                <FaCircleUser />
                <p>Welcome to Hotel Miranda Dashboard</p>
                <p>Authorized personal only</p>
                <input ref={usernameRef} type="text" defaultValue="jaimehu20@hotelmiranda.com"/>
                <input ref={passwordRef} type="password" defaultValue="jaimehu20@co"/>
                <input type="submit" value="Log In" onClick={login}/>
            </LogForm>
            </>
        )
    }

export default LoginMenu;