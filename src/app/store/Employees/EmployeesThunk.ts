import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/EmployeeData";
import { delay } from "../../delay";


export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await delay(data);
    return response;
})

export const fetchEmployee = createAsyncThunk('employees/fetchEmployee', async (id : string) => {
    const fetchedEmployee = data.find((item) => item.employee_id === id)
    return fetchedEmployee;
})

/* export const newEmployee = createAsyncThunk('employees/newEmployee', async () => {
    const response = await delay(data);
    return response;
})

export const editEmployee = createAsyncThunk('employees/editEmployee', async () => {
    const response = await delay(data);
    return response;
})

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async () => {
    const response = await delay(data);
    return response;
}) */