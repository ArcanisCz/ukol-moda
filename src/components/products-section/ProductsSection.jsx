import React from "react";
import Product from "../product/Product";
import "./style.css";

const ProductsSection = ({ title, products, category }) => {
  return (
    <>
      <section className={`products-section products-section--${category}`}>
        <h2>{title}</h2>
        <div className="products">
          {products.map((product, index) => {
            const { name, desc, price, imgAlt, imgSrc } = product;
            return (
              <Product
                key={index}
                name={name}
                desc={desc}
                price={price}
                imgAlt={imgAlt}
                imgSrc={`/assets/${imgSrc}`}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ProductsSection;
