import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRooms, fetchRoom, newRoom, editRoom, deleteRoom  } from "./RoomsThunk";

type initialState = {
    rooms: object[],
    room: {},
    status: string,
    error: string | undefined
}

const initialState : initialState = {
    rooms: [],
    room: {},
    status: "idle",
    error: undefined
}

export const RoomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRooms.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchRooms.rejected, (state,action) => {
            state.status = "rejected";
            state.error = action.error.message
        }).addCase(fetchRooms.fulfilled, (state,action : PayloadAction<any>) => {
            state.rooms = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(fetchRoom.pending, (state,action) => {
            state.status = "pending";
        }).addCase(fetchRoom.rejected, (state,action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(fetchRoom.fulfilled, (state,action : PayloadAction<any>) => {
            state.room = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(newRoom.pending, (state, action) => {
            state.status = "pending";
        }).addCase(newRoom.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "rejected";
        }).addCase(newRoom.fulfilled, (state, action) => {
            state.room = action.payload;
            state.status = "fulfilled"
        })
    }
})

export const getAllRooms = (state : any) => state.getRooms.rooms;
export const getRoom = (state : any) => state.getRooms.room;
export const getRoomsStatus = (state : any) => state.getRooms.status;
export const getRoomError = (state : any) => state.getRooms.status;