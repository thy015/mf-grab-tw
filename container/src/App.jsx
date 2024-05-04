import React from "react";
import ReactDOM from "react-dom";
import Header from "product/Header";
import "./index.scss";
import { NavLink } from "react-router-dom";

const App = () => (
  
  <>
    <div>
      <h1>Container App</h1>
    </div>
    <Header></Header>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
