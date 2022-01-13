import React, {useState} from 'react';
import "./EmployeePage.css";
import AgendaBlocks from "../../components/AgendaBlocks/AgendeBlocks";
import axios from "axios";
 import SearchBar from "../../components/SearchBar/searchBar";
import {NavLink} from "react-router-dom";
import pic from "../../assets/img.png";






function EmployeePage() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState({});
    const [picOne, setPicOne] = useState(null);
    const [name, setName] = useState("geen klant geselecteerd");
    const [email, setEmail] = useState("");
    const [advice, setAdvice] = useState("Klant heeft nog geen huidadvies gehad")
    const [dateOfAppointment, setDateOfAppointment] = useState("klant heeft nog geen eedere behandeling gehad")
    const [productAdvice, setProductAdvice] = useState ("Klant heeft nog geen product advies gehad")
    const [messageValue, setMessageValue] = useState("")


    async function getData(e) {
        e.preventDefault()

        try {
            const result = await axios.get(`http://localhost:8080/users/${messageValue}`)
            console.log(result.data)
            setUserData(result.data)
            // const pixIndex = result.data.image.length
            setName(result.data.username)
            setEmail(result.data.email)
            setAdvice(result.data.consult[result.data.consult.length -1].advice)
            setProductAdvice(result.data.consult[result.data.consult.length -1].productAdvice)
            setDateOfAppointment(result.data.consult[result.data.consult.length -1].dateOfAppointment)
            if(result.data.image[0].file != null) {
                setPicOne(`data:image/jpeg;base64,${result.data.image[0].file}`)
            }


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

                    <form>
                        <label htmlFor="form-klant">
                            <input
                                type="text"
                                id="form-message"
                                name="message"
                                value={messageValue}
                                placeholder="zoek klant"
                                onChange={(e) => setMessageValue(e.target.value)}

                                /> </label>

                        <button onClick={getData}  >zoek</button>
                    </form>




                </div>
                <div>
                    {/*{Object.keys(userData).length > 0 && <>*/}
                        <div className="photo-container">
                            {picOne === null ? <img className="user-img" src={pic} alt="before"/> : <img  className="user-img" src={picOne} alt="profile"  />}
                        </div>
                        <div>

                    <p><strong>Naam:</strong>{name}</p>
                    <p><strong>Email:</strong>{email} </p>
                    <p><strong>Advies:</strong>{advice} </p>
                    <p><strong>Product Advies:</strong>{productAdvice} </p>
                    <p><strong>Laatste Afspraak:</strong>{dateOfAppointment}</p>
                        </div>
                {/*</>}*/}

                </div>

                <NavLink to="/newAdvice" exact activeClassName="active-link">nieuw advies</NavLink>


            </div>
        </div>


    )
}

export default EmployeePage
