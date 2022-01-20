import React, {useContext, useState} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {AuthContext} from "../../components/Auth/AuthContext";
import "./SignIn.css"
import img3 from "../../assets/StudioAnnemarije - Natureskins-20.jpg";


function SignIn() {
    const { handleSubmit, register } = useForm();
    const {login} = useContext(AuthContext);
    const [error, setError] = useState('');

    async function onSubmit(data) {

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

                    <form className="form-detail" onSubmit={handleSubmit(onSubmit)}>
                        <h1> Inloggen</h1>


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

        </>
    );
}

export default SignIn;
