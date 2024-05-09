import { ReactNode, createContext, useReducer } from "react";

interface AuthState {
    isAuth: boolean;
    userName: string;
    userMail: string;
}

interface AuthContextInterface {
    logged: AuthState,
    dispatch: React.Dispatch<string>
}

const initialState = {
    isAuth: localStorage.getItem("AUTH_LS_KEY") !== null,
    userName: "Jaime",
    userMail: "prueba@prueba.com",
}

export const AuthContext = createContext<AuthContextInterface>({
    logged : {
        isAuth: localStorage.getItem("AUTH_LS_KEY") !== null,
        userName: "Jaime",
        userMail: "prueba@prueba.com",
    },
    dispatch: () => {}
})


const reducer = (state: AuthState, action: string) => {
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

export const AuthProvider = ({children}: {children: ReactNode}) => {

    const [logged, dispatch ] = useReducer(reducer, initialState);

    return <AuthContext.Provider value={{logged, dispatch}}>{children}</AuthContext.Provider>;
};