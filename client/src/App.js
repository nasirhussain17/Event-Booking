import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Booking from "./components/Booking";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Booked from "./components/Booked";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Events} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/event/:id" component={Booking} />
        <Route path="/booked" component={Booked} />
      </Switch>
    </Router>
  );
}

export default App;
