import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInfo } from "../../fetchInfo";

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async  () => {
    const fetchedBookings = await fetchInfo("/bookings");
    return fetchedBookings;
})

export const fetchBooking = createAsyncThunk('bookings/fetchBooking', async (id : string) => {
    const fetchedBooking = await fetchInfo(`/bookings/${id}`);
    return fetchedBooking;
})

export const newBooking = createAsyncThunk('bookings/newBooking', async (data : any) => {
    const response = await fetchInfo("/bookings", "POST", data );
    return response;
})

export const editBooking = createAsyncThunk('bookings/editBooking', async (data: {id : string, data : any}) => {
    const response = await fetchInfo(`/bookings/${data.id}`, "PATCH", data.data);
    return response;
})

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async (id: string) => {
    const response = await fetchInfo(`/bookings/${id}`, "DELETE");
    return response;
})