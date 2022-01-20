import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../components/Auth/AuthContext";
import axios from 'axios';
import "./profile.css"
import "../../assets/NatureSkins.preview-2.jpg"
import pic from "../../assets/img.png"
import {useForm} from "react-hook-form";

function Profile() {
    const [profileData, setProfileData] = useState([]);
    const {user} = useContext(AuthContext);
    const [error] = useState('')
    const [file, setFile] = useState('')
    const {handleSubmit, register} = useForm();
    const [imageOne, setImageOne] = useState('')
    const [imageTwo, setImageTwo] = useState('')
    const [advice, setAdvice] = useState('klant heeft nog geen eerder advies gekregen')
    const [productAdvice, setProductAdvice] = useState('klant heeft nog geen eerder advies gekregen')
    const [dateOfAppointment, setDateOfAppointment] = useState("klant is nog niet eerder geweest")


    const fileMaker = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
    }


    useEffect(() => {

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
                console.log(result.data)
                setProfileData(result.data);
                const picIndex = result.data.image.length
                setImageOne(`data:image/jpeg;base64,${result.data.image[0].file}`)
                setImageTwo(`data:image/jpeg;base64,${result.data.image[picIndex - 1].file}`)
                setAdvice(result.data.consult[result.data.consult.length - 1].advice)
                setProductAdvice((result.data.consult[result.data.consult.length - 1].productAdvice))
                setDateOfAppointment(result.data.consult[result.data.consult.length - 1].dateOfAppointment)


                //
            } catch (e) {
                console.error(e);
            }

        }

        fetchProfileData();
    }, [user])


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


            alert('Uploaden is gelukt');
            window.location.reload();

        } catch (error) {

            console.error(error);
        }
    };


        return (
            <>
                <div className='profileheader'><h2><strong>Profielpagina</strong></h2></div>

                <div className="profile-content">

                    <div className="user-details">


                        {Object.keys(profileData).length > 0 && <>
                            <div className="photo-container">
                                {imageOne === '' ? <img className="img" src={pic} alt="before"/> :
                                    <img className="img" src={imageOne} alt="profile"/>}


                            </div>
                            <div className="photo-container">
                                {imageTwo === '' ? <img className="img" src={pic} alt="after"/> :
                                    <img className="img" src={imageTwo} alt="profile"/>}
                            </div>
                            < div className="user">
                                <p><strong>Name:</strong>{profileData.username}</p>
                                <p><strong>Email:</strong>{profileData.email} </p>
                                <p><strong>Advies:</strong>{advice} </p>
                                <p><strong>Product Advies:</strong>{productAdvice} </p>
                                <p><strong>Laatste Afspraak:</strong>{dateOfAppointment}</p>
                            </div>
                        </>}


                    </div>

                </div>
                <div className="bottom-profile">
                    <div className="foto-form">
                        <form encType='multipart/form-data' className="uploadProfile" onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="profile"></label>
                            <p {...register("username")}/>

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
                    <div className="profile-link">
                        <p>Terug naar de
                            <Link to="/"> Homepagina </Link></p></div>
                </div>
            </>
        );

}

export default Profile;


