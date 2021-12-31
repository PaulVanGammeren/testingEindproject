// import React, {useContext, useState} from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import {AuthContext} from "../../components/Auth/AuthContext";
// import "./SignInAdmin.css"
//
//
// function SignInAdmin(props) {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [error, toggleError] = useState(false)
//     const { handleSubmit, register } = useForm();
//     const { login } = useContext(AuthContext);
//
//     async function onSubmit(data) {
//         // e.preventDefault()
//
//         console.log(data);
//
//         try {
//             const result = await axios.post('http://localhost:8080/authenticate', {
//                 username: username,
//                 password: password
//             });
//             console.log(result.data.accessToken);
//             login(result.data.accessToken);
//
//         } catch(e) {
//             console.error(e);
//         }
//     }
//
//     return (
//         <>
//             <h1 className="inlogheader">Inloggen</h1>
//             <p className="login-content">Let op dit is alleen voor medewerkers</p>
//
//             <form className="adminform" onSubmit={handleSubmit(onSubmit)}>
//                 <label htmlFor="usernam-field">
//                     username:
//                     <input
//                         type="username"
//                         id="username-field"
//                         name="username"
//                         {...register("username")}
//                     />
//                 </label>
//
//                 <label htmlFor="password-field">
//                     Wachtwoord:
//                     <input
//                         type="password"
//                         id="password-field"
//                         name="password"
//                         {...register("password")}
//                     />
//                 </label>
//                 <button
//                     type="submit"
//                     className="form-button"
//                 >
//                     Inloggen
//                 </button>
//             </form>
//         </>
//     );
// }
//
// export default SignInAdmin;
