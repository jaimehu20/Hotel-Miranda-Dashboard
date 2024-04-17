import styled from "styled-components";
import { data } from "../../app/data"; 

const TableContainer = styled.div`
    display: block;
    font-size: 15px;
    font-weight: bold;
    background: #F8F8F8;
    padding-top: 30px;
    padding-right: 62px;
    table {
        width: 100%;
        text-align: left;
        padding-left: 12px;
        padding-top: 12px;
        margin-left: 24px;
        border-radius: 12px;
        box-shadow: 0px 4px 4px #00000029;
        background: #ffffff;
        thead {
            tr {
                height: 45px;
                td {
                    box-shadow: 0px 1px 0px #00000009;
                    font-weight: bold;
                }
            }
        }
        tbody {
            tr{
                height: 68px;
                td:first-of-type{
                    width: 370px;
                    font-weight: bold;
                    p {
                        font-size: 13px;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        font-weight: 400;
                        color: gray;
                    }
                }
                td {
                    font-weight: 400;
                }
                td:nth-child(5) {
                    button{
                        background: #EBF1EF;
                        color: #135846;
                        font-weight: bold;
                        font-family: 'Poppins';
                        border: none;
                        border-radius: 18px;
                        padding: 10px;
                        margin-left: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`
export function Table() {

   const hola = data.map((e, index) => {
        console.log(e.last_name)
        return (
            <tr>
                <td>
                    {`${e.first_name} ${e.last_name}`}
                    <p>#{e.id}</p>
                </td>
                <td>{`${e.order_date} ${e.time}`}</td>
                <td>{`${e.check_in} ${e.checkIn_hour}`}</td>
                <td>{`${e.check_out} ${e.checkOut_hour}`}</td>
                <td>
                    <button>View Notes</button>
                </td>
                <td>Room Type</td>
                <td>
                    <button>Check In</button>
                </td>
            </tr>
        )
   }) 
    
    return (
        <>
            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <td>Guest Name</td>
                            <td>Order Date</td>
                            <td>Check In</td>
                            <td>Check Out</td>
                            <td>Special Request</td>
                            <td>Room Type</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {hola}
                    </tbody>

                </table>
                
            </TableContainer>
        </>
    )
}