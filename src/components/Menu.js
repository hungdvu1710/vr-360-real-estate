import './Menu.css'
import { useState } from 'react';

export const Menu = (props) => {
  const [activeMenuSection, setActiveMenuSection] = useState(-1);
  const handleMenuExpansion = (index) => {
    setActiveMenuSection((prevState) => {
      return prevState === index ? -1 : index
    });
  }

  return (
    <div className={`menu ${props.isMenuOpen ? "menu-open" : ""}`}>
      <h2>Menu</h2>
      <button key={0} onClick={() => handleMenuExpansion(0)} className={`menu__expand-btn ${activeMenuSection === 0 ? "active" : ""}`}>
        Group 1
      </button>
      <div className={`menu__item-group ${activeMenuSection === 0 ? "" : "inactive"}`}>
        {props.items.map((i) => (
          <div className="menu__item" key={i}>
            Menu item {i}
          </div>
        ))}
      </div>
      <button onClick={() => handleMenuExpansion(1)} className={`menu__expand-btn ${activeMenuSection === 1 ? "active" : ""}`}>
        Group 2
      </button>
    </div>
  );
};
