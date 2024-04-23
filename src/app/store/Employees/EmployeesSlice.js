import { createSlice } from "@reduxjs/toolkit";
import { fetchEmployees } from "./EmployeesThunk";

export const EmployeesSlice = createSlice({
    name: "employees",
    initialState: {
        employees: [],
        employee: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.pending, (state, action) => {
            state.status = "pending";
        }).addCase(fetchEmployees.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message
        }).addCase(fetchEmployees.fulfilled, (state, action) => {
            state.employees = action.payload;
            state.status = "fulfilled";
        })
    }
})

export const getAllEmployees = state => state.getEmployees.employees;
export const getEmployee = state => state.getEmployees.employee;
export const getEmployeeStatus = state => state.getEmployees.status;
export const getEmployeeError = state => state.getEmployees.error;