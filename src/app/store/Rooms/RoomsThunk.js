import { createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../../data/RoomsList";
import { delay } from "../../delay";

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
    const response = await delay(data);
    return response;
})

export const fetchRoom = createAsyncThunk('rooms/fetchRoom', async (id) => {
    const fetchedRoom = data.find((item) => item.room_id === id);
    return fetchedRoom;
})

export const newRoom = createAsyncThunk('rooms/newRoom', async () => {
    const response = await delay(data);
    return response;
})

export const editRoom = createAsyncThunk('rooms/editRoom', async () => {
    const response = await delay(data);
    return response;
})

export const deleteRoom = createAsyncThunk('rooms/deleteRoom', async () => {
    const response = await delay(data);
    return response;
})