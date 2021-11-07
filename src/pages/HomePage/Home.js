import React from "react";
import {Link} from "react-router-dom";
import "./home.css"
import banner from "../../assets/banner.jpg"

function Home(){

    return(
    <>

        <img className="banner" src={banner} alt="banner" width="100%px" height="400px"/>



        <h1 className="intro">Welkom bij Nature Skins Cosmetics, het platform voor je eigen beauty. Houdt hier je voorgang voor en zorg dat je weer straalt met een gave huid.
            Schrijf je in zodat je alles bij kan houden over je eigen beauty routine.
            Kijk terug welk advies onze schoonheidsspecialistes je hebben gegeven of welke samples had je ook al weer? Zoek contact of maak een nieuwe afspraak.</h1>
    <p className="home-content">Je kunt &nbsp; <Link to="/signin">inloggen </Link> &nbsp; of jezelf &nbsp;<Link to="/signup">    registeren </Link> &nbsp; als je nog geen
        account hebt.</p>

    </>
    )

}

export default Home