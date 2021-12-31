import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../components/Auth/AuthContext";
import axios from 'axios';
import "./profile.css"
import "./NatureSkins.preview-2.jpg"
import pic from "../../assets/downloaden(1).png"
import Accordion from "../../components/accordion/accordion";
import {useForm} from "react-hook-form";
import picture from "../../assets/Star treatments.jpg"
function Profile() {
    const [profileData, setProfileData] = useState([]);

    const {user} = useContext(AuthContext);
    const [error, setError] = useState('')
    const [file, setFile] = useState('')
    const {handleSubmit, register} = useForm();
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [picData, setPicData] = useState('')

    const fileMaker = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }


    useEffect(() => {
        let reader = new FileReader()
        let file = picData

        reader.onloadend =() => {

        }
        reader.readAsDataURL(file)

        async function fetchProfileData() {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get(`http://localhost:8080/users/${user.username}`, {
                    headers: {
                        "Content-Type": "application/json",
                        // "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
                setPicData(result.data.image[10].file)
                console.log(picData)
                console.log(result.data)
            } catch (e) {
                console.error(e);
            }

        }

        fetchProfileData();
    }, [user])
    console.log(profileData)

    async function onSubmit() {

        const token = localStorage.getItem('token');
        let formData = new FormData();
        formData.append("file", file);
        try {

            await axios.post(`http://localhost:8080/file-upload/${user.username}`, formData,
                {

                    headers: {

                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                    file: formData

                })

            console.log("foto is geupload")
            setSubmitSuccess(true);


            ;
        } catch (error) {

            console.error(error);
        }

    }


    return (
        <>

            <div className="profile-content">
                <div className="photo-container">
                    <img className="before" src={pic} alt="before" height="300px"/>


                    <form encType='multipart/form-data' className="uploadProfile" onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="profile">Add image</label>
                        <p {...register("username")}></p>

                        <input type="file"
                               id="file"
                               name="profilepic"
                               {...register("profile")}
                               onChange={fileMaker}

                        />
                        <button type="submit"
                                className="upload"
                        >
                            upload foto
                        </button>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                </div>


                <div className="user-details">
                    <div className="profile-header">
                        <h1>Profielpagina</h1>
                        <h2>Gegevens</h2>
                    </div>
                        {/*key/id checken, map functie  */}
                    <span className="user-details">
                        {console.log(picData)}
                        {Object.keys(profileData).length > 0 && <>
                            <div className="photo-container">
                                <img className="after" src={profileData.image[10].file} alt="proflie"/>
                                {/*{console.log(profileData.image.file}*/}
                            </div>
                            <p><strong>Name:</strong>{profileData.username}</p>
                            <p><strong>Email:</strong>{profileData.email} </p>
                            <p><strong>Advies:</strong>{profileData.consult[1].advice} </p>
                            <p><strong>Product Advies:</strong>{profileData.consult[0].productAdvice} </p>
                            <p><strong>Laatste Afspraak:</strong>{profileData.consult[0].dateOfAppointment}</p>
                            {profileData.consult.map((hallo) => {
                                return (
                                    <li>Laatste afspraak: {hallo.dateOfAppointment}</li>

                                )
                            })}
                        </>}




                    </span>

                    <p>Terug naar de
                        <Link to="/"> Homepagina </Link></p>
                </div>


            </div>

        </>
    );
}

export default Profile;
