import React from "react";
import ReactDOM from "react-dom";
import Header from 'product/Header'
import "./index.scss";

const App = () => (
  <div >
  <h1>Container App</h1>
  <Header></Header>
</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
