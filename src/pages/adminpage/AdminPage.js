import React from 'react';
import { NavLink} from 'react-router-dom';


import "./admin.css"


function AdminPage() {


    return (
        <>
            <div className="admin-page">
                <div>

                </div>
                <div className="admin-block">
                    <h2><NavLink to='/employee'>klanten beheer </NavLink></h2>
                </div>

                <div>

                </div>
                <div className="admin-block">
                  <h2> <NavLink to='/createAccount'>create account </NavLink></h2>
                </div>
                {/*functionaliteit wordt later ingevoegd, is nu een wanna have*/}
                <div className="admin-block">
                    <h2>Agenda</h2>
                </div>
                {/*functionaliteit wordt later ingevoegd, is nu een wanna have*/}
                <div className="admin-block">
                    <h2>Overzicht</h2>
                </div>

                {/*functionaliteit wordt later ingevoegd, is nu een wanna have*/}
                <div className="admin-block">
                    <h2>Medewerkers</h2>
                </div>


            </div>
        </>


    )
}

export default AdminPage
