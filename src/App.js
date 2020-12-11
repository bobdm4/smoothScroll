import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages";
import SinginPage from "./pages/singin";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/singin" component={SinginPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
