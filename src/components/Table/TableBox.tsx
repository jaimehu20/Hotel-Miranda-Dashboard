import styled from "styled-components";

const TableContainer = styled.div`
    display: block;
    font-size: 15px;
    font-weight: bold;
    background: #F8F8F8;
    padding-top: 30px;
    padding-right: 62px;
    padding-bottom: 30px;
    height: 80vh;
    table {
        width: 100%;
        text-align: left;
        padding-left: 12px;
        padding-top: 12px;
        padding-bottom: 20px;
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
                    img {
                        width: 135px;
                        height: 72px;
                        border-radius: 18px;
                        object-fit: cover;
                    }
                    a {
                        color: black;
                    }
                }
                td:nth-child(4) {
                    p{
                        display: inline;
                    }
                    svg {
                        padding-right: 10px;
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
                    button {
                        border-radius: 18px;
                        border: none;
                        padding: 10px;
                    }
                    
                }
            }
        }
        svg {
            cursor: pointer;
        }
    }
`

interface TableColumn {
    label: string;
    property: string,
    display?: (row: any) => React.ReactNode;
}

type props = {
    columns: TableColumn[]
    data: object[]
}

export function Table(props : props) {
    const displayRow = (row : any) => (
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