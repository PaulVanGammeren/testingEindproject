import React, {useContext} from "react";
import "./Header.css"
import logo from "../../assets/logoklein2.0.jpg"
import {NavLink} from "react-router-dom";
import {AuthContext} from "../Auth/AuthContext";

function Header() {

     const {isAuth, isAdmin, logout} = useContext(AuthContext)


    return (

            <header>



                <h1 className="img1"><img src={logo} alt="logo" width="200px" height="100px"/></h1>

                <ul className="header-ul">
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        {!isAuth ? <NavLink to="/SignIn" activeClassName="active-link"> Sign in</NavLink> :
                            <button
                                type="button"
                                onClick={logout}
                                className="header-btn"
                            >
                                Log uit
                            </button>}
                    </li>

                    <li>
                        {!isAuth ?  <NavLink to="/SignUp" activeClassName="active-link">Sign Up</NavLink> :
                            <NavLink to="/profile" activeClassName='active-link'>Profile</NavLink>}
                    </li>

                    <li>
                        {isAuth && isAdmin ? <NavLink to="/admin" activeClassName="active-link">admin page</NavLink>:
                        <a href="*">blog </a>}
                        </li>
                    <li>{isAuth && isAdmin? <NavLink to="/employee" activeClassName="active-link">klanten beheer</NavLink> :
                        <a href="/contact">contact</a>}
                    </li>

                </ul>
            </header>

);

}

export default Header