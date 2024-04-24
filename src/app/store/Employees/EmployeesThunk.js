import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/EmployeeData";
import { delay } from "../../delay";


export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await delay(data);
    return response;
})

export const fetchEmployee = createAsyncThunk('employees/fetchEmployee', async () => {
    const response = await delay(data);
    return response;
})

export const newEmployee = createAsyncThunk('employees/newEmployee', async () => {
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
})