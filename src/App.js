import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import "./style.css";

let App = () => {
  let [navActive, setNavActive] = useState(false);
  let toggle = (val) => {
    setNavActive(val);
  };
  return (
    <Router>
      <div>
        <Navbar conditionSetter={toggle} />
        <Home active={navActive} />
        {/* <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch> */}
      </div>
    </Router>
  );
};

export default App;
