import React from 'react';
import Product from '../Product';

const Shoes = () => {
    return (
<section className="shoes"> 
			<h2>Boty</h2>
			<div className="products">
                <Product name="Běhací tenisky"
                description="Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost."
                price={1790}
                image="running-shoes.jpg" />

                <Product name="Třpytivé lodičky"
                description="Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět."
                price={2950}
                image="shiny-shoes.jpg" />

                <Product name="Červené botičky"
                description="Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet."
                price={6200}
                image="red-shoes.jpg" />
            </div>
        </section>
)};

export default Shoes;