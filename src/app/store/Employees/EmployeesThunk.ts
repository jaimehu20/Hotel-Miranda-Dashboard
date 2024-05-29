import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInfo } from "../../fetchInfo";


export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await fetchInfo("/employees");
    return response;
})

export const fetchEmployee = createAsyncThunk('employees/fetchEmployee', async (id : string) => {
    const fetchedEmployee = await fetchInfo(`/employees/${id}`)
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