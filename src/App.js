import React from "react";
 import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Home from "./pages/HomePage/Home";
import SignIn from "./pages/SignInPage/SignIn";
import SignUp from "./pages/SignUpPage/SignUp";
import Profile from "./pages/Profile/Profile";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import AdminPage from "./pages/adminpage/AdminPage";
import CreateAccount from "./pages/SignUpPage/createAccount";
import ContactPage from "./pages/ContactPage/ContactPage";
import NewAdvicePage from "./pages/NewAdvice/NewAdvice";
import PrivateAdminRoute from "./components/PrivateRoute/PrivateRouteAdmin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateRouteAdmin from "./components/PrivateRoute/PrivateRouteAdmin";


function App() {

  return (
      <>
   <Header/>

              <Switch>
                  {/*Open route*/}
                  <Route exact path="/"><Home /></Route>
                  {/*Open route*/}
                  <Route exact path="/SignIn"> <SignIn /> </Route>
                  {/*Open route  */}
                  <Route exact path="/SignUp"> <SignUp /> </Route>
                  {/*Private User  */}
                  <PrivateRoute exact path="/profile"> <Profile /> </PrivateRoute>
                  {/*private admin*/}
                  <PrivateRouteAdmin exact path="/Admin"> <AdminPage /> </PrivateRouteAdmin>
                  {/*Private Admin*/}
                  <PrivateRouteAdmin exact path="/employee"> <EmployeePage /> </PrivateRouteAdmin>
                  {/*Private Admin */}
                  <Route exact path="/createAccount"> <CreateAccount /> </Route>
                  {/*Open route*/}
                  <Route exact path="/contact"> <ContactPage /> </Route>
                  {/*Private Route Admin*/}
                  <PrivateRouteAdmin exact path="/newAdvice"> <NewAdvicePage /> </PrivateRouteAdmin>


              </Switch>




   <Footer/>

      </>
  );
}

export default App;
