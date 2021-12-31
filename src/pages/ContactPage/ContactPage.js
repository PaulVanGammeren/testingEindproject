import React from "react";
import {Link} from "react-router-dom";
import "./contact.css"


function ContactPage() {


    return (
        <>
            <div className="contact-content">
                <div className="contact-content-form" >
                    <form className="contact-form">

                            <legend><u><strong>Contactformulier</strong></u></legend>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="voer uw naam in"/>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="voer uw email in"/>
                            <label htmlFor="message"> Uw bericht: </label>
                            <textarea className="contact-text" name="message" placeholder="voer uw bericht in"></textarea>
                            <input type="submit" value="Submit"/>

                    </form>
                </div>
                <div>
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