import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dresses from "./components/Dresses";
import Accessories from "./components/Accessories";
import Shoes from "./components/Shoes";
import "./style.css";

const App = () => (
  <div className="container">
    <Header title="Móda" subtitle="Stylové oblečení a doplňky pro každý den" />

    <Dresses titleD="Šaty" />
    <Shoes titleS="Boty" />
    <Accessories titleA="Doplňky" />

    <Footer
      year="2022"
      author="Czechitas"
      disclosure="Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí."
    />
  </div>
);

render(<App />, document.querySelector("#app"));
