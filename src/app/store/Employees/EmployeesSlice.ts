import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchEmployees, fetchEmployee, newEmployee, deleteEmployee, editEmployee } from "./EmployeesThunk";


type initialState = {
    employees: object[],
    employee: object | null,
    status: string,
    error: string | undefined

}
const initialState : initialState = {
    employees: [],
    employee: null,
    status: "idle",
    error: undefined
}

export const EmployeesSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEmployees.pending, (state, action) => {
            state.status = "pending";
        }).addCase(fetchEmployees.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message 
        }).addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<any>) => {
            state.employees = action.payload.allUsers;
            state.status = "fulfilled";
        })

        builder.addCase(fetchEmployee.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchEmployee.rejected, (state,action) => {
            state.status = "rejected"
            state.error = action.error.message;
        }).addCase(fetchEmployee.fulfilled, (state,action: PayloadAction<any>) => {
            state.employee = action.payload.individualUser;
            state.status = "fulfilled";
        })

        builder.addCase(newEmployee.pending, (state,action) => {
            state.status = "pending";
        }).addCase(newEmployee.rejected, (state,action) => {
            state.status = "rejected"
            state.error = action.error.message;
        }).addCase(newEmployee.fulfilled, (state,action: PayloadAction<any>) => {
            state.employees.push(action.payload.user[0])
            state.status = "fulfilled";
        })

        builder.addCase(editEmployee.pending, (state,action) => {
            state.status = "pending";
        }).addCase(editEmployee.rejected, (state,action) => {
            state.status = "rejected"
            state.error = action.error.message;
        }).addCase(editEmployee.fulfilled, (state,action: PayloadAction<any>) => {
            state.employees = state.employees.map((item) => item._id == action.payload.user._id ? action.payload.user : item)
            state.status = "fulfilled";
        })

        builder.addCase(deleteEmployee.pending, (state,action) => {
            state.status = "pending";
        }).addCase(deleteEmployee.rejected, (state,action) => {
            state.status = "rejected"
            state.error = action.error.message;
        }).addCase(deleteEmployee.fulfilled, (state,action: PayloadAction<any>) => {
            state.employees = state.employees.filter((item) => item._id != action.payload.user._id)
            state.status = "fulfilled";
        })
    }
})

export const getAllEmployees = (state: any) => state.getEmployees.employees;
export const getEmployee = (state: any) => state.getEmployees.employee;
export const getEmployeeStatus = (state: any) => state.getEmployees.status;
export const getEmployeeError = (state: any) => state.getEmployees.error;