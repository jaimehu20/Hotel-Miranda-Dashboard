import { ReactNode, createContext, useReducer } from "react";

interface AuthState {
    isAuth: boolean;
    email: string;
    password: string;
}

interface AuthContextInterface {
    logged: AuthState,
    dispatch: React.Dispatch<string>
}

const initialState = {
    isAuth: false,
    email: "",
    password: ""
}

export const AuthContext = createContext<AuthContextInterface>({
    logged : {
        isAuth: localStorage.getItem("authTOKEN") !== null,
        email: "jaimehu20@hotelmiranda.com",
        password: "jaimehu20@co"
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