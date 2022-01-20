import React, {useContext} from 'react';
import {useHistory, Route} from "react-router-dom";
import {AuthContext} from "../Auth/AuthContext";

//private Admin Route is for admin and Employees only, for now its parameter is based on username (admin) will be based on user role in the future, as soon as more users need acces to admin part of application

function PrivateAdminRoute({isAut, children, ...rest}){
    const {isAuth,isAdmin} = useContext(AuthContext);
    const history=useHistory();

    return(
        <Route {...rest}>
            {isAuth && isAdmin ? children : history.push('/')}
        </Route>
    )
}

export default PrivateAdminRoute;