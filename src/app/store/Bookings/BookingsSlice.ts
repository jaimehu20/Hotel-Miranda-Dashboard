import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBookings, fetchBooking } from "./BookingsThunk";

type initialState = {
    bookings: string[],
    booking: any,
    status: string,
    error: null,
}

const initialState: initialState =  {
    bookings: [],
    booking: null,
    status: "idle",
    error: null
}

export const BookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBookings.pending, (state, action) => {
            state.status = "pending";
        }).addCase(fetchBookings.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        }).addCase(fetchBookings.fulfilled, (state, action) => {
            state.bookings = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(fetchBooking.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchBooking.rejected, (state,action) => {
            state.status = action.error.message;
        }).addCase(fetchBooking.fulfilled, (state,action: PayloadAction<object[]>) => {
            state.booking = action.payload;
            state.status = "fulfilled";
        })
    }
})

export const getAll = (state: any) => state.getBookings.bookings;
export const getOnly = (state: any) => state.getBookings.booking;
export const getAllStatus = (state: any) => state.getBookings.status;
export const getAllError = (state: any) => state.getBookings.error; 