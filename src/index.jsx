import React from "react";
import { render } from "react-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductsSection from "./components/products-section/ProductsSection";
import "./style.css";
import products from "./db/products.js";

const App = () => {
  const filterProducts = (category) => {
    return products.filter((item) => item.category === category);
  };
  return (
    <>
      <div className="container">
        <Header title="Móda" desc="Stylové oblečení a doplňky pro každý den" />
        <ProductsSection
          title="Šaty"
          products={filterProducts("dresses")}
          category="dresses"
        />
        <ProductsSection
          title="Boty"
          products={filterProducts("shoes")}
          category="shoes"
        />
        <ProductsSection
          title="Doplňky"
          products={filterProducts("accessories")}
          category="accessories"
        />
        <Footer year={2022} author="Eva Maťová" />
      </div>
    </>
  );
};

render(<App />, document.querySelector("#app"));
