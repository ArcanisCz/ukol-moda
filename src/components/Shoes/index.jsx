import React from 'react';
import Product from '../Products';
import './style.css';


const Shoes = () => {
	return (
		<>
			<h2>Boty</h2>
			<hr />
			<div className="products">
				<Product
					image="running-shoes.jpg"
					name="Běžecké boty"
					description="Růžová s kontrastnými šedými a bílými detaily. Veliká paráda! Tyhle tenisky jsou další srdcová záležitost."
					price="1790 Kč"
				/>

				<Product
					image="shiny-shoes.jpg"
					name="Třpitivé lodičky"
					description="Elegantní třpitivé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve Vašem šatníku chybět."
					price="2950 Kč"
				/>

				<Product
					image="red-shoes.jpg"
					name="Červené botičky"
					decription="Extravagantní červené boty s vysokým šněrováním. V těchto botách se za vámi budou všichni otáčet."
					price="6200 Kč"
				/>

			</div>

		</>

	)
};

export default Shoes;

