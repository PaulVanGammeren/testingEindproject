import React, {useContext} from "react";
 import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import SignIn from "./pages/SignInPage/SignIn";
import SignUp from "./pages/SignUpPage/SignUp";
import Profile from "./pages/Profile/Profile";
import {AuthContext} from "./components/AuthContext";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import AdminPage from "./pages/adminpage/AdminPage";
import SignInAdmin from "./pages/signInAdmin/SingInAdmin";
import CreateAccount from "./pages/SignUpPage/createAccount";
import ContactPage from "./pages/ContactPage/ContactPage";


function App() {
     // const {isAuth} = useContext(AuthContext)

  return (
      <>
   <Header/>

              <Switch>

                  <Route exact path="/">
                      <Home />
                  </Route>

                  <Route exact path="/SignIn">
                      <SignIn />
                  </Route>

                  <Route exact path="/SignUp">
                      <SignUp />
                  </Route>

                  <Route exact path="/profile">
                      <Profile />
                  </Route>

                  <Route exact path="/signInAdmin" >
                      <SignInAdmin />
                  </Route>


                  <Route exact path="/Admin">
                      <AdminPage />
                  </Route>

                  <Route exact path="/employee">
                      <EmployeePage />
                  </Route>

                  <Route exact path="/createAccount">
                      <CreateAccount />
                  </Route>

                  <Route exact path="/contact">
                      <ContactPage/>
                  </Route>
              </Switch>




   <Footer/>

      </>
  );
}

export default App;
