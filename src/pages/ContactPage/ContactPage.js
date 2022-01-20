import React from "react";
import "./contact.css"
import img3 from "../../assets/StudioAnnemarije - Natureskins.web-2.jpg";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

//created a contact page, at this moment it is not functioning due to no back end site. Want to implement in the future a direct mail is send to the company email.

function ContactPage() {


    const {handleSubmit, register} = useForm();

    return (
        <>
            <div className="contact-content">
                <div className="contact-content-form" >
                    <div className="page-content">
                        <div className="form-v6-content">
                            <div className="form-left">
                                <img className="img3" src={img3} alt="form"/>
                            </div>
                            <form className="form-detail" onSubmit={handleSubmit()}>
                                <h1>Contact</h1>
                                <div className="form-row">
                                    <label htmlFor="email-field">
                                        Email:
                                        <input
                                            className="input-text"
                                            type="email"
                                            // placeholder="email"
                                            id="email-field"
                                            name="email"
                                            {...register("email", {
                                                    required: "email is een verplicht veld",
                                                    minLength: {
                                                        value: 6,
                                                        message: "email adres moet minstens 6 tekens bevatten",
                                                    }
                                                },
                                            )}
                                        />
                                    </label>
                                </div>
                                <div className="form-row">

                                    <label htmlFor="username-field">
                                        Naam:
                                        <input
                                            className="input-text"
                                            type="text"
                                            id="username-field"
                                            name="username"
                                            {...register("username", {
                                                required: "username is verplicht",

                                            })}

                                        />


                                    </label>
                                </div>
                                <div className="form-row">
                                    <label htmlFor="message-field">
                                       Bericht:
                                        <input
                                            className="input-text"
                                            type="text"
                                            id="text-field"
                                            rows="3"
                                            name="message"

                                            {...register("message"

                                            )}
                                        />
                                    </label>
                                </div>
                                <div className="form-row-last">
                                    <button
                                        type="submit"
                                        className="form-button"
                                    >
                                        Verstuur
                                    </button>
                                    <p className="account">Terug naar je  <Link
                                        to="/profile">&nbsp; Profiel &nbsp;</Link> pagina.</p>
                                </div>


                            </form>

                        </div>
                    </div>
                </div>
                <div className="contact-info">
                    <p><u><strong>Contactgegevens</strong><br/>
                        <strong>Telefoon</strong><br/>
                        020 627 6732<br/>
                        <strong>Email</strong><br/>
                        info@natureskins.nl<br/>
                        <strong>Adres</strong><br/>
                        Rozengracht 72H<br/>
                        <strong>Postcode</strong><br/>
                        1016 NE<br/>
                        <br/>
                        <strong>Openingstijden winkel</strong><br/><br/>
                        Maandag Gesloten<br/>
                        Dinsdag 10:00 – 17:00<br/>
                        Woensdag 10:00 – 17:00<br/>
                        Donderdag 10:00 – 17:00<br/>
                        Vrijdag 10:00 – 17:00<br/>
                        Zaterdag 10:00 – 17:00<br/>
                        Zondag Gesloten<br/><br/>
                        <strong> Openingstijden Salon</strong><br/><br/>
                        Maandag Gesloten<br/>
                        Dinsdag 09:00 – 18:00<br/>
                        Woensdag 09:00 – 20:00<br/>
                        Donderdag 09:00 – 20:00<br/>
                        Vrijdag 10:00 – 20:00<br/>
                        Zaterdag 10:00 – 17:00<br/>
                        Zondag Gesloten</u></p>

                </div>
            </div>
        </>
    )

}

export default ContactPage