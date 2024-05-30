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

export const newEmployee = createAsyncThunk('employees/newEmployee', async (data : any) => {
    const response = await fetchInfo("/employees", "POST", data );
    return response;
})

export const editEmployee = createAsyncThunk('employees/editEmployee', async (data: {id : string, data : any}) => {
    const response = await fetchInfo(`/employees/${data.id}`, "PATCH", data.data);
    return response;
})
export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id: string) => {
    const response = await fetchInfo(`/employees/${id}`, "DELETE");
    return response;
})