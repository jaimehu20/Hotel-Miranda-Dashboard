import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../Hooks/useAuth";

const PrivateRoute = ({children} : {children : ReactNode}) => {
    const navigate = useNavigate();
    const {logged} = useAuth();

   useEffect(() => {
        if (!logged.isAuth) {
            navigate("/");
        }
    }, [logged])
    return children;
};

export default PrivateRoute;