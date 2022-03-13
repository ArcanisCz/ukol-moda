import React from "react";
import "./style.css";

const Product = ({ name, desc, price, imgSrc, imgAlt }) => {
  return (
    <div className="product">
      <img className="product__image" src={`./assets/${imgSrc}`} alt={imgAlt} />
      <div className="product__content">
        <h3 className="product__name">{name}</h3>
        <p className="product__description">{desc}</p>
        <p className="product__price">{price} Kč</p>
      </div>
    </div>
  );
};

export default Product;
