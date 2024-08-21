import React from "react";
import styled from "styled-components";
import EmployeePic from "../../assets/employee.webp";

const Icon = styled.img`
    width: 80px !important;
`

export const EmployeeIcon : React.FC = () => {
    return <>
        <Icon src={EmployeePic} />
    </>
}