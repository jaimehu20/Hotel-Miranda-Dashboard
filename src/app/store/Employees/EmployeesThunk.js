import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/EmployeeData";


function delayData(employeeData, delay = 200){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(employeeData);
        }, [delay])
    });
}

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await delayData(data);
    return response;
})

export const fetchEmployee = createAsyncThunk('employees/fetchEmployee', async () => {
    const response = await delayData(data);
    return response;
})

export const newEmployee = createAsyncThunk('employees/newEmployee', async () => {
    const response = await delayData(data);
    return response;
})

export const editEmployee = createAsyncThunk('employees/editEmployee', async () => {
    const response = await delayData(data);
    return response;
})

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async () => {
    const response = await delayData(data);
    return response;
})