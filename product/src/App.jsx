import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => (
  <div>
    <h1>hi</h1>
    <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
  </div>
 
);
ReactDOM.render(<App />, document.getElementById("app"));
