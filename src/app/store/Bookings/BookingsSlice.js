import { createSlice } from "@reduxjs/toolkit";
import { fetchBookings, fetchBooking } from "./BookingsThunk";

export const BookingsSlice = createSlice({
    name: "bookings",
    initialState: {
        bookings: [],
        booking: null,
        status: "idle",
        error: null
    },
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
        }).addCase(fetchBooking.fulfilled, (state,action) => {
            state.booking = action.payload;
            state.status = "fulfilled";
        })
    }
})

export const getAll = state => state.getBookings.bookings;
export const getOnly = state => state.getBookings.booking;
export const getAllStatus = state => state.getBookings.status;
export const getAllError = state => state.getBookings.error; 