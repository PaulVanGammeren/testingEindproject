import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    let admin = false
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        isAdmin: false,
        status: 'pending',
    });
    const history = useHistory();


    useEffect(() => {

        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        // zet de token in de Local Storage
        localStorage.setItem('token', JWT);
        // decode de token zodat we de ID van de gebruiker hebben en data kunnen ophalen voor de context
        const decoded = jwt_decode(JWT);
        // geef de ID, token en redirect-link mee aan de fetchUserData functie (staat hieronder)
        fetchUserData(decoded.sub, JWT, '/profile');
        history.push('/profile');
    }


    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            isAdmin: false,
            status: 'done',
        });


        history.push('/');
    }

    // Omdat we deze functie in login- en het mounting-effect gebruiken, staat hij hier gedeclareerd!
    async function fetchUserData(id, token, redirectUrl) {
        try {
            // haal gebruikersdata op met de token en id van de gebruiker
            const result = await axios.get(`http://localhost:8080/users/${id}`, {

                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const username = result.data.username;

            admin = username === 'admin';


            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                isAdmin: admin,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    consult: result.data.consult.advice,
                    id: result.data.id,
                    history: result.data.consult.dateOfAppointment,
                    product: result.data.consult.productAdvice,

                },
                status: 'done',
            });


            // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernnaartoe door
            // als we de history.push in de login-functie zouden zetten, linken we al door voor de gebuiker is opgehaald!
            if (redirectUrl) {
                history.push(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            // ging er iets mis? Plaatsen we geen data in de state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        isAdmin: isAuth.isAdmin,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider