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
    isAuth: false,
    userName: "",
    userMail: "",
}

export const AuthContext = createContext<AuthContextInterface>({
    logged : {
        isAuth: localStorage.getItem("AUTH_LS_KEY") !== null,
        userName: "Jaime",
        userMail: "jaimehu20@hotelmiranda.com",
    },
    dispatch: () => {}
})


const reducer = (state: AuthState, action: string) => {
    switch (action) {
        case 'login':
            return {...state, isAuth: true};
        case 'logout':
            localStorage.removeItem("authTOKEN");
            return {...state, isAuth: false};
        default: 
            return state;
    }
}

export const AuthProvider = ({children}: {children: ReactNode}) => {

    const [logged, dispatch ] = useReducer(reducer, initialState);

    return <AuthContext.Provider value={{logged, dispatch}}>{children}</AuthContext.Provider>;
};