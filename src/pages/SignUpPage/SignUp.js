import React, {useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import "./SignUp.css"


function SignUp() {
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    const history = useHistory();
    const {handleSubmit, register} = useForm();

    async function onSubmit(data) {

        setError('');
        toggleLoading(true);

        console.log(data);

        try {
            const result = await axios.post('http://localhost:8080/customers', {
                headers: {
                    "Content-Type": "application/json",

                    email: data.email,
                    password: data.password,
                    username: data.username,
                } });


            console.log(result);

            toggleRegisterSuccess(true);


            setTimeout(() => {
                history.push('/signin');
            }, 2000);
        } catch (e) {
            console.error(e);

            setError(`Het registeren is mislukt. Probeer het opnieuw (${e.message})`);

        }

        toggleLoading(false);
    }

    return (
        <>
        <h1>Registreren</h1>
        <p>Maak een account aan om al je gegvens te kunnen inzien</p>
        <form className="registratie" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email-field">
                Email:
                <input
                    type="email"
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

            <label htmlFor="username-field">
               Username:
                <input
                    type="text"
                    id="username-field"
                    name="username"
                    {...register("username", {
                        required: "username is verplicht",

                    })}

                />


            </label>

            <label htmlFor="password-field">
                Wachtwoord:
                <input
                    type="password"
                    id="password-field"
                    name="password"
                    {...register("password", {
                        requered: "password is een verplicht veld",
                        minLength: {
                            value: 6,
                        message: "password moet uit minimaal 6 tekens bestaan"}
                    })}
            />
        </label>
        <button
            type="submit"
            className="form-button"
            disabled={loading}
        >
            {loading ? 'Versturen...' : 'Maak account aan'}
        </button>
        {registerSuccess === true && <p>Registeren is gelukt! Je wordt nu doorgestuurd naar de inlog pagina!</p>}
        {error && <p className="error-message">{error}</p>}
        </form>
    <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
</>
)
    ;
}

export default SignUp

//{error && <p className="littlered">usernaam is verplicht</p>}