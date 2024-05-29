import styled from "styled-components";
import { useRef } from "react";
import { BookingFilterInterface, RoomsFilterInterface, EmployeesFilterInterface } from "./ListSelectorInterfaces";

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    background: #F8F8F8;
    div {
        gap: 24px;
    }
`
const List = styled.ul`
   display: flex;
   gap: 3em;
   list-style: none;
   background: #F8F8F8;
   padding-top: 50px;
   margin-top: 0px;
   li {
    button {
        background: #F8F8F8;
        border: none;
        font-family: 'Poppins';
        font-size: 18px;
        color: #6E6E6E;
        border-bottom: 2px solid gray;
        cursor: pointer;
        &:hover{
            color: #135846;
            border-bottom: 2px solid #135846;
        }
    }
   }
   input {
    padding: 10px;
    border-radius: 18px;
    border: 1px solid black;
   }
`
const ButtonNew = styled.button`
    height: 46px;
    padding-right: 20px;
    padding-left: 20px;
    margin-top: 40px;
    margin-right: 20px;
    font-family: 'Poppins';
    font-weight: bold;
    color: #ffffff;
    background: #135846;
    border: none;
    border-radius: 18px;
    cursor: pointer;
`
const Select = styled.select`
    height: 46px;
    margin-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 18px;
    border: 2px solid #135846;
`



export function BookingFilter({ setSearchInput, setStatusFilter, setChoosen, setVisible}: BookingFilterInterface) {

    const selectRef = useRef<HTMLSelectElement>(null);

    const handleSelect = () => {
        if (selectRef.current){
            const selectedValue = selectRef.current.value;
            setChoosen(selectedValue);
            return selectedValue
        }
        return "No input";
    }

    return (
        <>
            <Container>
                <List>
                    <li>
                        <button onClick={() => setStatusFilter("all")}>All Bookings</button>
                    </li>
                    <li>
                        <button onClick={() => {setStatusFilter("checkin")}}>Check In</button>
                    </li>
                    <li>
                        <button onClick={() => {setStatusFilter("checkout")}}>Check Out</button>
                    </li>
                    <li>
                        <button onClick={() => {setStatusFilter("inprogress")}}>In Progress</button>
                    </li>
                    <input type="text" placeholder="Filter by guest name..." onChange={(event) => setSearchInput(event.target.value)}/>
                </List>
                <div>
                    <Select ref={selectRef} onChange={handleSelect}>
                        <option value="order_date">Order Date</option>
                        <option value="guest">Guest</option>
                        <option value="checkin">Check In</option>
                        <option value="checkout">Check Out</option>
                    </Select>
                    <ButtonNew onClick={() => setVisible(true)}>+ NEW BOOKING</ButtonNew>
                </div>
            </Container>
        </>
    )
}

export function RoomsFilter({setClicked, setVisible} : RoomsFilterInterface) {

    return (
        <>
            <Container>
                <List>
                    <li>
                        <button onClick={() => setClicked("all")}>All Rooms</button>
                    </li>
                    <li>
                        <button onClick={() => setClicked("available")}>Available</button>
                    </li>
                    <li>
                        <button onClick={() => setClicked("booked")}>Booked</button>
                    </li>
                </List>
                <div>
                    <ButtonNew onClick={() => setVisible(true)}>+ NEW ROOM</ButtonNew>
                </div>
            </Container>
        </>
    )
}

export function ContactFilter() {
    return (
        <>
            <Container>
                <List>
                    <li>
                        <button>All Contacts</button>
                    </li>
                    <li>
                        <button>Archived</button>
                    </li>
                </List>
            </Container>
        </>
    )
}

export function EmployeesFilter({setSearchInput, setClicked}: EmployeesFilterInterface) {
    return (
        <>
            <Container>
                <List>
                    <li>
                        <button onClick={() => setClicked("all")}>All Employee</button>
                    </li>
                    <li>
                        <button onClick={() => setClicked("Active")}>Active Employee</button>
                    </li>
                    <li>
                        <button onClick={() => setClicked("Inactive")}>Inactive Employee</button>
                    </li>
                    <input type="text" placeholder="Filter by employee name..." onChange={(event) => setSearchInput(event.target.value)}/>
                </List>
                <div>
                    <ButtonNew>+ NEW EMPLOYEE</ButtonNew>
                </div>
            </Container>
        </>
    )
}

