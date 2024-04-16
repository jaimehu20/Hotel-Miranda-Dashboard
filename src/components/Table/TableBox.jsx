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
        tbody {
            tr:first-of-type{
                height: 45px;
                td {
                    box-shadow: 0px 1px 0px #00000009;
                    font-weight: bold;
                }
            }
            tr {
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
                    p {
                        font-size: 13px;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        font-weight: 400;
                    }
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

    return (
        <>
            <TableContainer>
                <table>
                    <tbody>
                        <tr>
                            <td>Guest Name</td>
                            <td>Order Date</td>
                            <td>Check In</td>
                            <td>Check Out</td>
                            <td>Special Request</td>
                            <td>Room Type</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[0].first_name} ${data[0].last_name}`}
                                <p>#{data[0].id}</p>
                            </td>
                            <td>{`${data[0].order_date} ${data[0].time}`}</td>
                            <td>
                                {data[0].check_in}
                                <p>{`${data[0].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[0].check_out}
                                <p>{`${data[0].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[1].first_name} ${data[1].last_name}`}
                                <p>#{data[1].id}</p>
                            </td>
                            <td>{`${data[1].order_date} ${data[1].time}`}</td>
                            <td>
                                {data[1].check_in}
                                <p>{`${data[1].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[1].check_out}
                                <p>{`${data[1].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[2].first_name} ${data[2].last_name}`}
                                <p>#{data[2].id}</p>
                            </td>
                            <td>{`${data[2].order_date} ${data[2].time}`}</td>
                            <td>
                                {data[2].check_in}
                                <p>{`${data[2].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[2].check_out}
                                <p>{`${data[2].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[3].first_name} ${data[3].last_name}`}
                                <p>#{data[3].id}</p>
                            </td>
                            <td>{`${data[3].order_date} ${data[3].time}`}</td>
                            <td>
                                {data[3].check_in}
                                <p>{`${data[3].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[3].check_out}
                                <p>{`${data[3].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[4].first_name} ${data[4].last_name}`}
                                <p>#{data[4].id}</p>
                            </td>
                            <td>{`${data[4].order_date} ${data[4].time}`}</td>
                            <td>
                                {data[4].check_in}
                                <p>{`${data[4].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[4].check_out}
                                <p>{`${data[4].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[5].first_name} ${data[5].last_name}`}
                                <p>#{data[5].id}</p>
                            </td>
                            <td>{`${data[5].order_date} ${data[5].time}`}</td>
                            <td>
                                {data[5].check_in}
                                <p>{`${data[5].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[5].check_out}
                                <p>{`${data[5].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[6].first_name} ${data[6].last_name}`}
                                <p>#{data[6].id}
                            </p>
                            </td>
                            <td>{`${data[6].order_date} ${data[6].time}`}</td>
                            <td>
                                {data[6].check_in}
                                <p>{`${data[6].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[6].check_out}
                                <p>{`${data[6].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[7].first_name} ${data[7].last_name}`}
                                <p>#{data[7].id}</p>
                            </td>
                            <td>{`${data[7].order_date} ${data[7].time}`}</td>
                            <td>
                                {data[7].check_in}
                                <p>{`${data[7].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[7].check_out}
                                <p>{`${data[7].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {`${data[8].first_name} ${data[8].last_name}`}
                                <p>#{data[8].id}</p>
                            </td>
                            <td>{`${data[8].order_date} ${data[8].time}`}</td>
                            <td>
                                {data[8].check_in}
                                <p>{`${data[8].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[8].check_out}
                                <p>{`${data[8].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            {`${data[9].first_name} ${data[9].last_name}`}
                            <p>#{data[9].id}</p>
                            </td>
                            <td>{`${data[9].order_date} ${data[9].time}`}</td>
                            <td>
                                {data[9].check_in}
                                <p>{`${data[9].checkIn_hour}`}</p>
                            </td>
                            <td>
                                {data[9].check_out}
                                <p>{`${data[9].checkOut_hour}`}</p>
                            </td>
                            <td>
                                <button>
                                    View Notes
                                </button>
                            </td>
                            <td>Room Type</td>
                            <td>
                                <button>Check In</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
        </>
    )
}