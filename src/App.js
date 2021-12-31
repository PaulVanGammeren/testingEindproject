import React from "react";
 import {Switch, Route} from 'react-router-dom';
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
                  <Route exact path="/profile"> <Profile /> </Route>
                  {/*private admin*/}
                  <Route exact path="/Admin"> <AdminPage /> </Route>
                  {/*Private Admin*/}
                  <Route exact path="/employee"> <EmployeePage /> </Route>
                  {/*Private Admin */}
                  <Route exact path="/createAccount"> <CreateAccount /> </Route>
                  {/*Open route*/}
                  <Route exact path="/contact"> <ContactPage /> </Route>
                  {/*Private Route Admin*/}
                  <Route exact path="/newAdvice"> <NewAdvicePage /> </Route>


              </Switch>




   <Footer/>

      </>
  );
}

export default App;
