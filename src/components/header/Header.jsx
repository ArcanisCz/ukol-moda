import React from "react";
import "./style.css";

const Header = ({ title, desc }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__description">{desc}</p>
    </header>
  );
};

export default Header;
