import { createSlice } from "@reduxjs/toolkit";
import { fetchRoom, fetchRooms } from "./RoomsThunk";
export const RoomsSlice = createSlice({

    name: "rooms",
    initialState: {
        rooms: [],
        room: null,
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchRooms.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.error.message
        }).addCase(fetchRooms.fulfilled, (state,action) => {
            state.rooms = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(fetchRoom.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchRoom.rejected, (state,action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(fetchRoom.fulfilled, (state,action) => {
            state.room = action.payload;
            state.status = "fulfilled";
        })
    }
})

export const getAllRooms = state => state.getRooms.rooms;
export const getRoom = state => state.getRooms.room;
export const getRoomsStatus = state => state.getRooms.status;
export const getRoomError = state => state.getRooms.status;