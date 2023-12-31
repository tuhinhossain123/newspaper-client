
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    console.log(user)

    if(loading){
        return <span className="loading loading-dots loading-xs"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;