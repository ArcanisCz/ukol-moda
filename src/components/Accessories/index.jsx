import React from 'react';
import "./style.css";
import Product from '../Product';

const Accessories = () => {
    return (
        <section class="accessories">
			<h2>Doplňky</h2>
			<div class="products">

                <Product name="Modrá kabelka"
                description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti."
                price={3590}
                image="blue-handbag.jpg" />

                <Product name="Šedá vlněná šála"
                description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné."
                price={970}
                image="grey-scarf.jpg" />

                <Product name="Brýle"
                description="Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly."
                price={1620}
                image="glasses.jpg" />
                </div>
		</section>
    )
}

export default Accessories;