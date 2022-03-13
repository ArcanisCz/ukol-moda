import React from 'react';
import './style.css';

const Product = ({ image, name, description, price }) => {
	return (
		<div className="product">
			<img className="productImage" src={`/assets/${image}`} alt={image} />
			<div className="productContent">
				<h3 className="productName">{name}</h3>
				<p className="productDescription">{description}</p>
				<p className="productPrice">{price}</p>
			</div>
		</div>

	)
};

// src="assets/red-dress.jpg" alt="Červené šaty"

export default Product;