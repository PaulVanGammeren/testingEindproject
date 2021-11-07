import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../components/AuthContext";
import axios from 'axios';
import "./profile.css"
import "./NatureSkins.preview-2.jpg"
import pic from "../../assets/downloaden (1).png"
import Accordion from "../../components/accordion/accordion";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const {user} = useContext(AuthContext);

    useEffect(() => {
        // we halen de pagina-content op in de mounting-cycle
        async function fetchProfileData() {
            // haal de token uit de Local Storage om in het GET-request te bewijzen dat we geauthoriseerd zijn
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('http://localhost:3000/660/private-content', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])

    return (
        <>
            <div className="profile-content">
                <div className="photo-container">
                    <img className="before" src={pic} alt="before" height="300px"/>
                    <input type="file" className="upload-submit"/>
                    <button type="button" className="upload">upload foto</button>
                </div>
                <div className="photo-container">
                    <img className="after" src={pic} alt="after" height="300px"/>
                </div>
                <div className="user-details">
                    <div className="profile-header">
                        <h1>Profielpagina</h1>
                        <h2>Gegevens</h2>
                    </div>

                    <section>
                        <p><strong>Name:</strong>{user.username}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </section>

                    {/*Als er keys in ons object zitten hebben we data, en dan renderen we de content*/}
                    {/*{Object.keys(profileData).length > 0 &&*/}
                    {/*<section>*/}
                    {/*    <h2>Strikt geheime profiel-content</h2>*/}
                    {/*<h3>{profileData.title}</h3>*/}
                    {/*<p>{profileData.content}</p>*/}
                    {/*</section>*/}
                    {/*}*/}
                    {/*<p>Terug naar de*/}
                    {/*    <Link to="/"> Homepagina </Link></p>*/}
                </div>

                <div className="user-history">
                <Accordion title="advies"
                           content="uit database"/>

                <Accordion title="history"
                           content="uit database"/>

                <Accordion title="products"
                           content="uit database"/>




                </div>

            </div>
        </>
    );
}

export default Profile;
