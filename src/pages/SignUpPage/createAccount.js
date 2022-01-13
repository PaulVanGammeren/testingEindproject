import React, {useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';

// import "./SignUp.css"


function CreateAccount() {
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
            const result = await axios.post(`http://localhost:8080/users`, {
                email: data.email,
                password: data.password,
                username: data.username,
            });


            console.log(result);

            toggleRegisterSuccess(true);


            setTimeout(() => {
                history.push('/EmployeePage');
            }, 2000);
        } catch (e) {
            console.error(e);

            setError(`Het registeren is mislukt. Probeer het opnieuw (${e.message})`);

        }

        toggleLoading(false);
    }

    return (
        <>
            <h1>Maak een nieuw account aan </h1>

            <form className="admin-registratie" onSubmit={handleSubmit(onSubmit)}>
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
                    Gebruikersnaam:
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
                                message: "password moet uit minimaal 6 tekens bestaan"
                            }
                        })}
                    /> {error && <p className="littlered">usernaam is verplicht</p>}
                </label>



                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                > submit </button>
            </form>

        </>
)
;
}

export default CreateAccount