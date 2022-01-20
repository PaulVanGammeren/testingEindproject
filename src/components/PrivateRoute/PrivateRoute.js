import React, {useContext} from 'react';
import {useHistory, Route} from "react-router-dom";
import {AuthContext} from "../Auth/AuthContext";

// Private Routes are available for all users that are logged in with username and password

function PrivateRoute({isAut, children, ...rest}){
    const {isAuth} = useContext(AuthContext);
    const history=useHistory();

    return(
        <Route {...rest}>

            {isAuth  ? children : history.push('/')}
        </Route>
    )
}

export default PrivateRoute;