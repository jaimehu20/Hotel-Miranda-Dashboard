import styled from "styled-components";

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
                box-shadow: 0px 1px 0px #00000009;
                    font-weight: bold;
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
                    }
                    small {
                        color: gray;
                        font-weight: 400;
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
                td:last-of-type {
                    div {
                        gap: 10px;
                        margin-left: 12px;
                        svg:first-of-type {
                        color: green;
                        width: 20px;
                        height: 20px;
                        }
                        svg:last-of-type {
                        color: red;
                        width: 20px;
                        height: 20px;
                    }
                    }
                    
                }
            }
        }
    }
`
export function Table(props) {
    
    const displayRow = row => (
         <tr>
            {props.columns.map(col => 
            <td>
                {col.display ? col.display(row) : row[col.property]}
            </td>)}
         </tr>
)
    return (
        <>
            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            {props.columns.map((col, i) => <th key={i}>{col.label}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(displayRow)}
                    </tbody>
                </table>     
            </TableContainer>
        </>
    )
}