import styled from "styled-components"

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

export function Filter() {
    return (
        <>
            <Container>
                <List>
                    <li>
                        <button>All Bookings</button>
                    </li>
                    <li>
                        <button>Check In</button>
                    </li>
                    <li>
                        <button>Check Out</button>
                    </li>
                    <li>
                        <button>In Progress</button>
                    </li>
                </List>
                <div>
                    <Select>
                        <option>Order Date</option>
                        <option>Guest</option>
                        <option>Check In</option>
                        <option>Check Out</option>
                    </Select>
                    <ButtonNew>+ NEW BOOKING</ButtonNew>
                </div>
            </Container>
        </>
    )
}
