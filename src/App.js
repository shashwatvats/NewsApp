import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import ReadNow from "./Components/readNow/ReadNow";
import authentication from "./service/auth";

function App() {
  const [titleName, settitleName] = useState("");
  function check() {
    authentication.Login();
    return authentication.isLoggedin;
  }

  return (
    <div>
      <Router>
        <Header titleName={titleName} />
        <Route
          exact
          path="/"
          component={() => <Login settitleName={settitleName} />}
        />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/dashboard"
          component={() => (check() ? <Dashboard /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/readnow"
          component={() => (check() ? <ReadNow /> : <Redirect to="/" />)}
        />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
