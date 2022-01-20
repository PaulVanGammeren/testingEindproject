import React, {useContext, useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../components/Auth/AuthContext";
import "./SignIn.css"
import img3 from "../../assets/StudioAnnemarije - Natureskins-20.jpg";


// STAPPENPLAN CONTEXT TESTEN (4)
// - [x] Importeer de AuthContext in een component die de data zal gaan gebruiken
// - [x] Bekijk hoe de data in de context eruit ziet doormiddel van alles = useContext(AuthContext) en console.log dit!
// - [x] Welke onderdelen zie je in de console?

// STAPPENPLAN INLOGGEN (5)
// - [x] Importeer axios
// - [x] Maak een asynchrone functie
// - [x] Maak een try / catch blok
// - [x] In de try: maak een POST request naar het eindpoint: http://localhost:3000/login
// - [x] Een POST request krijgt altijd de url en het data object mee (in dit geval alleen email en wachtwoord)
// - [x] Bekijk de response. Als het succesvol was, dan:
// - [x] Moet de JWT worden doorgegeven aan de context vanuit hier:
//    - [x] Importeeer useContext en AuthContext
//    - [x] Destructure daar de login functie uit
//    - [x] Roep deze functie aan als het inloggen succesvol was en geef de JWT token daaraan mee
// - Wanneer alles in de context goed gaat, zullen we ook vanuit daar de gebruiker doorlinken naar de profielpagina.
// - Puntjes op de i: error en laad-tijden inplemententeren (maar dit kun je inmiddels zelf!)

function SignIn() {
    const { handleSubmit, register } = useForm();
    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');

    async function onSubmit(data) {
        console.log(data);
        setError('');

        try {
            const result = await axios.post('http://localhost:8080/authenticate',
            {
               username: data.username,
                password :data.password,

            });
            //geeft jwt aan de context
            login(result.data.jwt);

        } catch(e) {
            console.error(e);
            setError(`Het inloggen is mislukt. combinatie username en wachtwoord incorrect. Probeer het opnieuw (${e.message})`);

        }
    }

    return (
        <>




            <div className="page-content">

            </div>
            <div className="page-content">
                <div className="form-v6-content">
                    <div className="form-left">
                        <img className="img3" src={img3} alt="form"/>
                    </div>
                    {/*<div className="form-detail">*/}
                    <form className="form-detail" onSubmit={handleSubmit(onSubmit)}>
                        <h1> Inloggen</h1>
                        {/*<p className="loginP">Log in om uw gegevens in te zien</p>*/}

                        <div className="form-row">
                            <label htmlFor="username-field">
                                Username:
                                <input
                                    className="input-text"
                                    type="username"
                                    id="username-field"
                                    name="username"
                                    {...register("username")}
                                />
                            </label>
                        </div>
                        <div className="form-row">

                            <label htmlFor="password-field">
                                Wachtwoord:
                                <input
                                    className="input-text"
                                    type="password"
                                    id="password-field"
                                    name="password"
                                    {...register("password")}
                                />
                            </label>
                        </div>
                        <div className="form-row-last">
                            <button
                                type="submit"
                                className="form-button"
                            >
                                Inloggen
                            </button>

                         {error && <p className="error-message">{error}</p>}
                        <p className="account">Heb je nog geen account?&nbsp;<Link to="/signup">Registreer</Link> &nbsp;je dan eerst.</p>

                        </div>
                        </form>
                    </div>


                </div>
            {/*</div>*/}
        </>
    );
}

export default SignIn;
