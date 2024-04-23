import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/OrderData";

function delayData(orderData, delay = 200){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(orderData);
        }, [delay])
    });
}

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async  () => {
    const response = await delayData(data);
    return response;
})

export const fetchBooking = createAsyncThunk('bookings/fetchBooking', async  () => {
    const response = await delayData(data);
    return response;
})

export const newBooking = createAsyncThunk('bookings/newBooking', async  () => {
    const response = await delayData(data);
    return response;
})

export const editBooking = createAsyncThunk('bookings/editBooking', async  () => {
    const response = await delayData(data);
    return response;
})

export const deleteBooking = createAsyncThunk('bookings/deleteBooking', async  () => {
    const response = await delayData(data);
    return response;
})