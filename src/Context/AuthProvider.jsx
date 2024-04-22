import { createContext, useReducer, useState } from "react";

export const AuthContext = createContext()

const initialState = {
    isAuth: localStorage.getItem("AUTH_LS_KEY") !== null,
    userName: "Jaime",
    userMail: "prueba@prueba.com"
};

const reducer = (state, action) => {
    switch (action) {
        case 'login':
            localStorage.setItem("AUTH_LS_KEY", "1");
            return {...state, isAuth: true};
        case 'logout':
            localStorage.removeItem("AUTH_LS_KEY");
            return {...state, isAuth: false};
        default: 
            return state;
    }
}

export const AuthProvider = ({children}) => {

    const [logged, dispatch ] = useReducer(reducer, initialState);

    return <AuthContext.Provider value={{logged, dispatch}}>{children}</AuthContext.Provider>
}