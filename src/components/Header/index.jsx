import React from "react";
import "./style.css";

const Header = ({title}) => {
    return (
        <header class="header">
            <h1 class="header__title">{title}</h1>
            <p class="header__description">Stylové oblečení a doplňky pro každý den</p>
        </header>
        )
    };

export default Header;