import React, {useState} from 'react';
import "./EmployeePage.css";
import AgendaBlocks from "../../components/AgendaBlocks/AgendeBlocks";
import axios from "axios";
import SearchBar from "../../components/SearchBar/searchBar";
import {NavLink} from "react-router-dom";


function EmployeePage() {
    const [username, setUserName] = useState("");
    const [userData, setUserData] = useState({})


    async function getData() {
        try {
            const result = await axios.get(`http://localhost:8080/users/${username}`)
            console.log(result.data)
            setUserData(result.data)
        } catch (e) {
            console.error(e)

        }
        try {
            const result = await axios.get(`http://localhost:8080/consult/${username}`)
            console.log(result.data)
            setUserData(result.data)
        } catch (e) {
            console.error(e)

        }

    }


    return (

        <div className="employeeContent">
            <div className="agenda-container">


                <h2 className="Dagagenda"> Dag agenda</h2>

                <AgendaBlocks name={"charlotte Spilt "}
                              treatment={"Skin Cure "}
                              time={"10.00 tot 11.30"}/>

                <AgendaBlocks name={"Nanda van Asperen "}
                              treatment={"Swedish Massage "}
                              time={"11.45 tot 13.00"}/>
                <AgendaBlocks name={"PAUZE "}
                              treatment={""}
                              time={"13.00 tot 13.30"}/>
                <AgendaBlocks name={"Aurdry Craft "}
                              treatment={"Made to Measure "}
                              time={"13.45 tot 15.00"}/>
                {/*@NOVA  if you let mee pass you can get one for free */}
                <AgendaBlocks name={"Nova Eeken "}
                              treatment={"Skin food Facial "}
                              time={"15.30 tot 17.00"}/>

            </div>


            <div className="agenda-container2">
                <div>
                    <SearchBar setUserNameHandler={setUserName}
                    />
                    <button
                        type="button"
                        onClick={getData}
                    >
                        zoek klant!
                    </button>


                </div>
                <div>
                    {/*<img src="userData.img" alt="profile pic"/>*/}
                    <p><strong>Gebruiker</strong></p>  {userData && userData.username}
                    <p><strong>Email</strong></p>  {userData && userData.email}
                    <p><strong>Laatste behandeling</strong></p>
                    {/*{userData && userData.DateOfAppointment*/}
                    <p><strong>Vorig Advies</strong></p>
                    {/*{userData && userData.advice*/}
                </div>

                <NavLink to="/newAdvice" exact activeClassName="active-link">nieuw advies</NavLink>


            </div>
        </div>


    )
}

export default EmployeePage
