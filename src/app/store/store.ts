import { Reducer, configureStore } from "@reduxjs/toolkit";
import { BookingsSlice } from "./Bookings/BookingsSlice";
import { EmployeesSlice } from "./Employees/EmployeesSlice";
import { RoomsSlice } from "./Rooms/RoomsSlice";
import { CommentsSlice } from "./Messages/MessagesSlice";


export const store = configureStore({
    reducer: {
        getBookings: <Reducer>BookingsSlice.reducer,
        getEmployees: <Reducer>EmployeesSlice.reducer,
        getRooms: <Reducer>RoomsSlice.reducer,
        getComments: <Reducer>CommentsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch