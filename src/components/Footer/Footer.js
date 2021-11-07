import React from "react";
import './Footer.css';
import {NavLink} from "react-router-dom";

function Footer(){

    return (

        <footer>
            <ul className="footer-ul">

                    <NavLink to="/signInAdmin" exact activeClassName="active-link">Login als medewerker</NavLink>

            </ul>
            <p className="copyright">Copyright 2021 - Nature Skin Cosmetics | gemaakt door Paul van Gammeren </p>
        </footer>
    )
}

export default Footer
