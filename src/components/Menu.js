import './Menu.css'
import { useState } from 'react';
import MenuSection from './MenuSection';

export const Menu = (props) => {
  // const [activeMenuSection, setActiveMenuSection] = useState(-1);
  // const handleMenuExpansion = (index) => {
  //   setActiveMenuSection((prevState) => {
  //     return prevState === index ? -1 : index
  //   });
  // }

  return (
    <div className={`menu ${props.isMenuOpen ? "menu-open" : ""}`}>
      <h2>Menu</h2>
      <MenuSection items={props.items} name={'Group 1'} key={1} />
      <MenuSection items={[6,7,8]} name={'Group 2'} key={2} />
    </div>
  );
};
