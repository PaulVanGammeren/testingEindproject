import React from "react";
import {Link} from "react-router-dom";
import "./home.css"
import img3 from "../../assets/StudioAnnemarije - Natureskins.web-56.jpg";

function Home(){

    return(
    <>
        <div className="page-content">

        </div>
        <div className="page-content">
            <div className="form-v6-content">
                <div className="form-left">
                    <img className="img3" src={img3} alt="form"/>
                </div>
                <div className="form-detail">
                    <h1>Nature Skin Cosmetics</h1>
                    <p className="account">Welkom bij Nature Skins Cosmetics, het platform voor je eigen beauty. Houdt hier je voorgang bij en zorg dat je weer straalt met een gave huid.<br/>
                        Schrijf je in zodat je alles bij kan houden over je eigen beauty routine.
                        Kijk terug welk advies onze schoonheidsspecialistes je hebben gegeven of welke samples had je ook al weer? </p>
                    <p className="account">Je kunt &nbsp; <Link className="link" to="/signin">inloggen </Link> &nbsp; of jezelf &nbsp;<Link to="/signup">    registeren </Link> &nbsp; als je nog geen
                        account hebt.</p>
                </div>


            </div>
        </div>
    </>
    )

}

export default Home