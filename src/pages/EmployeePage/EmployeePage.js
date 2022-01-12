import React, {useState} from 'react';
import "./EmployeePage.css";
import AgendaBlocks from "../../components/AgendaBlocks/AgendeBlocks";
import axios from "axios";
import SearchBar from "../../components/Searchbar";
import {NavLink} from "react-router-dom";
import pic from "../../assets/downloaden(1).png";
import pic2 from "../../assets/logoklein2.0.jpg";

function EmployeePage() {
    const [username, setUsername] = useState("");
    // const [userData, setUserData] = useState({});
    const [picOne, setPicOne] = useState('');
    const [name, setName] = useState("geen klant geselecteerd");
    const [email, setEmail] = useState("");
    const [advice, setAdvice] = useState("")
    const [dateOfAppointment, setDateOfAppointment] = useState("")
    const [productAdvice, setProductAdvice] = useState ("")


    async function getData() {
        try {
            const result = await axios.get(`http://localhost:8080/users/${username}`)
            // setUserData(result.data)
            setPicOne(`data:image/jpeg;base64,${result.data.image[0].file}`)
            setName(result.data.username)
            setEmail(result.data.email)
            setAdvice(result.data.consult[result.data.consult.length -1].advice)
            setProductAdvice(result.data.consult[result.data.consult.length -1].productAdvice)
            setDateOfAppointment(result.data.consult[result.data.consult.length -1].dateOfAppointment)
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

                    <SearchBar  onclick={setUsername}
                    />




                </div>
                <div>

                        <div className="photo-container">
                            {picOne === '' ? <img className="img" src={pic} alt="before"/> : <img  src={picOne} alt="profile"  />}
                        </div>

                    <p><strong>Naam:</strong>{name}</p>
                    <p><strong>Email:</strong>{email} </p>
                    <p><strong>Advies:</strong>{advice} </p>
                    <p><strong>Product Advies:</strong>{productAdvice} </p>
                    <p><strong>Laatste Afspraak:</strong>{dateOfAppointment}</p>


                </div>

                <NavLink to="/newAdvice" exact activeClassName="active-link">nieuw advies</NavLink>


            </div>
        </div>


    )
}

export default EmployeePage
