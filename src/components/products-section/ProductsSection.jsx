import React from "react";
import Product from "../product/Product";
import "./style.css";

const ProductsSection = ({ title, products, category }) => {
  const categoryClasses = {
    dresses: `products-section--dresses`,
    shoes: `products-section--shoes`,
    accessories: `products-section--accessories`,
  };

  return (
    <section className={`products-section ${categoryClasses[category]}`}>
      <h2>{title}</h2>
      <div className="products">
        {products.map(({ name, desc, price, imgAlt, imgSrc, id }) => {
          return (
            <Product
              key={id}
              name={name}
              desc={desc}
              price={price}
              imgAlt={imgAlt}
              imgSrc={imgSrc}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
