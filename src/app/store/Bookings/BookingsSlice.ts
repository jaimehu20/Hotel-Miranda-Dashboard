import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBookings, fetchBooking, newBooking, editBooking, deleteBooking } from "./BookingsThunk";
import { RootState } from "../store";

type initialState = {
    bookings: object[],
    booking: object | null,
    status: string,
    error: string | undefined
}

const initialState: initialState =  {
    bookings: [],
    booking: null,
    status: "idle",
    error: undefined
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
        }).addCase(fetchBookings.fulfilled, (state, action: PayloadAction<any>) => {
            state.bookings = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(fetchBooking.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchBooking.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.error.message
        }).addCase(fetchBooking.fulfilled, (state,action: PayloadAction<any>) => {
            state.booking = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(newBooking.pending, (state,action) => {
            state.status = "pending";
        }).addCase(newBooking.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.error.message
        }).addCase(newBooking.fulfilled, (state,action: PayloadAction<any>) => {
            state.booking = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(editBooking.pending, (state,action) => {
            state.status = "pending";
        }).addCase(editBooking.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.error.message
        }).addCase(editBooking.fulfilled, (state,action: PayloadAction<any>) => {
            state.booking = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(deleteBooking.pending, (state,action) => {
            state.status = "pending";
        }).addCase(deleteBooking.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.error.message
        }).addCase(deleteBooking.fulfilled, (state,action: PayloadAction<any>) => {
            state.status = "fulfilled";
        })

        
    }
})

export const getAll = (state : RootState) => state.getBookings.bookings;
export const getOnly = (state : RootState) => state.getBookings.booking;
export const getAllStatus = (state : RootState) => state.getBookings.status;
export const getAllError = (state : RootState) => state.getBookings.error; 