import React, {useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import img3 from "../../assets/StudioAnnemarije - Natureskins.web-45.jpg";



function CreateAccount() {
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const history = useHistory();
    const {handleSubmit, register} = useForm();
    const [registerSuccess]= useState(false);

    async function onSubmit(data) {

        setError('');
        toggleLoading(true);


        try {
             await axios.post(`http://localhost:8080/users`, {
                email: data.email,
                password: data.password,
                username: data.username,
            });



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

                <div className="page-content">
                    <div className="form-v6-content">
                        <div className="form-left">
                            <img className="img3" src={img3} alt="form"/>
                        </div>
                        <form className="form-detail" onSubmit={handleSubmit(onSubmit)}>
                            <h1>Registreren</h1>
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
                                    Username:
                                    <input
                                        className="input-text"
                                        type="text"
                                        id="username-field"
                                        name="username"
                                        // placeholder="username"
                                        {...register("username", {
                                            required: "username is verplicht",

                                        })}

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
                                        // placeholder="password"
                                        {...register("password", {
                                            requered: "password is een verplicht veld",
                                            minLength: {
                                                value: 6,
                                                message: "password moet uit minimaal 6 tekens bestaan"
                                            }
                                        })}
                                    />
                                </label>
                            </div>
                            <div className="form-row-last">
                                <button
                                    type="submit"
                                    className="form-button"
                                    disabled={loading}
                                >
                                    {loading ? 'Versturen...' : 'Maak account'}
                                </button>
                                <p className="account">terug naar <Link to="/employee">&nbsp; klantenbeheer &nbsp;</Link> </p>
                            </div>
                            {registerSuccess === true &&
                            <p>Registeren is gelukt! Je wordt nu doorgestuurd naar de inlog pagina!</p>}
                            {error && <p className="error-message">{error}</p>}

                        </form>

                    </div>
                </div>



            </>
)
;
}

export default CreateAccount