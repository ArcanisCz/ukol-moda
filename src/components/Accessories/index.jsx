import React from 'react';
import Product from '../Products';
import './style.css';

const Accessories = () => {
	return (
		<>
			<h2>Doplňky</h2>
			<hr />
			<div className="products">
				<Product
					image="blue-handbag.jpg"
					name="Modrá kabelka"
					description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro Váš mobil, peněženku a další nezbytnosti."
					price="3590 Kč"
				/>

				<Product
					image="grey-scarf.jpg"
					name="Šedá vlněná šála"
					description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věcné."
					price="970 Kč"
				/>

				<Product
					image="glasses.jpg"
					name="Brýle"
					description="Elegantní brýle z nové kolekce karla Lagrfielda"
					price="1620 Kč"
				/>

			</div>

		</>

	)
};


export default Accessories;