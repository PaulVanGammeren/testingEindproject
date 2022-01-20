import React, {useContext, useState} from 'react';
import AgendaBlocks from "../../components/AgendaBlocks/AgendeBlocks";
import axios from "axios";
import {useForm} from 'react-hook-form';
import {useHistory} from "react-router-dom";
import img3 from "../../assets/StudioAnnemarije - Natureskins.web-45.jpg";
import {AuthContext} from "../../components/Auth/AuthContext";

function NewAdvicePage() {

    const {register, handleSubmit} = useForm();
    const [error, toggleError] = useState(false )
    const history = useHistory();
    const [messageValue, setMessageValue] = useState("")
    // const {user} = useContext(AuthContext)



    async function onSubmit(data) {

        const token = localStorage.getItem('token');

        try {

            await axios.post(`http://localhost:8080/consult/${messageValue}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },

                dateOfAppointment: data.dateOfAppointment,
                advice: data.advice,
                productAdvice: data.productAdvice.join()
            });

            setTimeout(() => {
                history.push('/employee');
            }, 1500);
        } catch (e) {
            console.error(e);
            toggleError(true)
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
            <div className="page-content">
                <div className="form-v6-content">
                    <div className="form-left">
                        <img className="img3" src={img3} alt="form"/>
                    </div>
                    <div className="advice">

                        <h1>Nieuw advies</h1>

                        <div className="agenda-container2">
                            <form className="advice-client" id="advice"
                                  onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="form-row">
                                    <label htmlFor="form-klant"><strong>naam klant: </strong>
                                        <input
                                            type="text"
                                            id="form-message"
                                            name="message"
                                            value={messageValue}
                                            placeholder="klant"
                                            onChange={(e) => setMessageValue(e.target.value)}

                                        /> {error === true && <span> gebruiker niet gevonden </span>}</label>
                                </div>

                                <div className="form-row">

                                    <label htmlFor="dateOfAppointment"><strong>datum afspraak: </strong>
                                        <input type="date"
                                               id="dateOfAppointment"
                                               name="dateOfAppointment"
                                               {...register("dateOfAppointment")}/>
                                    </label>
                                </div>


                                <div className="form-row">
                                    <label htmlFor="productAdvice"><strong>product advies: </strong> <br></br>
                                        <label htmlFor="product1"> dagcreme</label>
                                        <input type="checkbox" id="product1" name="dagcreme" value="dagcreme"
                                               {...register("productAdvice")}/>
                                        <label htmlFor="product2"> nachtcreme</label>
                                        <input type="checkbox" id="product2" name="nachtcreme" value="nachtcreme"
                                               {...register("productAdvice")}/>
                                        <label htmlFor="vehicle3">toner</label>
                                        <input type="checkbox" id="vehicle3" name="product3" value="toner"
                                               {...register("productAdvice")}/>
                                    </label>
                                </div>
                                <div className="form-row">


                                <label htmlFor="advice"><strong>Advies: </strong></label>
                                <input type="text" name="advice" id="advice"

                                       {...register("advice")}/>

                                <button className="form-button" type="submit" id="advice-client">submit</button>
                        </div>
                            </form>


                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}

export default NewAdvicePage
