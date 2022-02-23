import MenuItem from "./MenuItem";
import './MenuSection.css'
import { useState } from "react";

const MenuSection = (props) => {
  const [isActive, setActive] = useState(false);
  const handleMenuExpansion = () => {
    setActive(prevState => !prevState);
  }
  return (
    <div className="menu-section">
      <button key={props.name} onClick={handleMenuExpansion} className={`menu-expand__btn ${isActive ? "active" : ""}`}>
        {props.name}
      </button>
      <div className={`menu-section__item-group ${isActive ? "" : "inactive"}`}>
        {props.items.map((item) => (
          <MenuItem item={item} key={item} />
        ))}
      </div>
    </div>
  )
}

export default MenuSection