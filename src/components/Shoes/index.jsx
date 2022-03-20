import React from "react";
import Product from "../Product";
import "./style.css";

const Shoes = ({ titleS }) => {
  return (
    <div className="shoes">
      <h2>{titleS}</h2>
      <div className="products">
        <Product
          image="running-shoes.jpg"
          name="Běhací tenisky"
          description="Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost."
          price="1790"
        />

        <Product
          image="shiny-shoes.jpg"
          name="Třpytivé lodičky"
          description="Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět."
          price="2950"
        />

        <Product
          image="red-shoes.jpg"
          name="Červené botičky"
          description="Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet."
          price="6200"
        />
      </div>
    </div>
  );
};

export default Shoes;
