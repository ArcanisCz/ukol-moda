import React from 'react';
import "./style.css";

const Product = ({name, description, price, image}) => {
    return (
            <div className="products">
				<div className="product">
					<img className="product__image" src="assets/red-dress.jpg" alt="Červené šaty"/>
					<div className="product__content">
						<h3 className="product__name">Červené šaty</h3>
						<p className="product__description">V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.</p>
						<p className="product__price">2290 Kč</p>
				    </div>
		        </div>
            </div> 


    )
};

export default Product;