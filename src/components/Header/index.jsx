import React from "react";
import "./style.css";

const Header = ({ title, subtitle }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__description">{subtitle}</p>
    </div>
  );
};

export default Header;
