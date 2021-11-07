import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../components/AuthContext";
import axios from 'axios';
import "./EmployeePage.css";
import Accordion from "../../components/accordion/accordion";


function EmployeePage() {


    return (

        <div className="employeeContent">
            <div className="agenda-container">

                <h2 className="Dagagenda"> Dag agenda</h2>
                <div className="agenda">
                    <div className="agenda-content">
                        <p><strong>naam klant:</strong> charlotte Spilt &nbsp; </p>
                        <p><strong>Behandeling:</strong> Made to measure</p>
                    </div>
                    <p><strong> Tijdstip: </strong> 10:00 tot 11:15</p>
                </div>
                <div className="agenda">
                    <div className="agenda-content">
                        <p><strong>naam klant:</strong> Nanda van Asperen &nbsp; </p>
                        <p><strong>Behandeling:</strong> Massage</p>
                    </div>
                    <p><strong> Tijdstip: </strong> 11:30 tot 12:45</p>
                </div>
                <div className="agenda">
                    <div className="agenda-content">
                        <p><strong>naam klant:</strong> charlotte &nbsp; </p>
                        <p><strong>Behandeling:</strong> Made to measure</p>
                    </div>
                    <p><strong> Tijdstip: </strong> 10:00 tot 11.15</p>
                </div>
                <div className="agenda">
                    <div className="agenda-content">
                        <p><strong>naam klant:</strong> charlotte &nbsp; </p>
                        <p><strong>Behandeling:</strong> Made to measure</p>
                    </div>
                    <p><strong> Tijdstip: </strong> 10:00 tot 11.15</p>
                </div>
                <div className="agenda">
                    <div className="agenda-content">
                        <p><strong>naam klant:</strong> charlotte &nbsp; </p>
                        <p><strong>Behandeling:</strong> Made to measure</p>
                    </div>
                    <p><strong> Tijdstip: </strong> 10:00 tot 11.15</p>
                </div>
                <div className="agenda">
                    <div className="agenda-content">
                        <p><strong>naam klant:</strong> charlotte &nbsp; </p>
                        <p><strong>Behandeling:</strong> Made to measure</p>
                    </div>
                    <p><strong> Tijdstip: </strong> 10:00 tot 11.15</p>
                </div>
            </div>
            <div className="agenda-container2">
                <div>

                    <input type="search" className="searchBar" placeholder="zoek klant"/>
                    <button type="submit" className="Submit-btn">zoek</button>
                </div>

                <Accordion title="klant gegevens"
                           content="klant geschiedenis"/>
                {/*//input form */}
                <Accordion title="voeg advies toe"
                           content="wverbsdbrevsdv"/>

                {/*// gegeven samples drop down menu */}
                {/* Submit knop*/}

            </div>
        </div>


    )
}

export default EmployeePage
