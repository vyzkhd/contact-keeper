import React, { Fragment } from "react";
import { Navbar } from "./components/layout/navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import ContactState from "./context/Contact/ContactState";
import AuthState from "./context/Auth/AuthState";
import AlertState from "./context/Alert/AlertState";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Alerts from "./components/layout/Alerts";
import SetAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/Routing/privateRouting";

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
