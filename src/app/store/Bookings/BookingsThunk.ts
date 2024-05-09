import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/OrderData";
import { delay } from "../../delay";

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async  () => {
    const response = await delay(data);
    return response;
})

export const fetchBooking = createAsyncThunk('bookings/fetchBooking', async (id : string) => {
    const fetchedBooking = data.find((item) => item.id === id)
    return fetchedBooking;
})

/* export const newBooking = createAsyncThunk('bookings/newBooking', async  () => {
    const response = await delayData(data);
    return response;
})

export const editBooking = createAsyncThunk('bookings/editBooking', async  () => {
    const response = await delayData([]);
    return response;
})

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async  (id) => {
    await delayData();
    return id;
}) */