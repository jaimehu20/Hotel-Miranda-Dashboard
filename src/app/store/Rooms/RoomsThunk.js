import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/RoomsList"

function delayData(roomData, delay = 200) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(roomData);
        }, [delay])
    });
} 

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    const response = await delayData(data);
    return response;
})

export const fetchRoom = createAsyncThunk('rooms/fetchRoom', async () => {
    const response = await delayData(data);
    return response;
})

export const newRoom = createAsyncThunk('rooms/newRoom', async () => {
    const response = await delayData(data);
    return response;
})

export const editRoom = createAsyncThunk('rooms/editRoom', async () => {
    const response = await delayData(data);
    return response;
})

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async () => {
    const response = await delayData(data);
    return response;
})