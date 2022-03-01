import "./Menu.css";
import MenuSection from "./MenuSection";

export const Menu = (props) => {
  return (
    <div className={`menu ${props.isMenuOpen ? "menu-open" : ""}`}>
      <h2>Menu</h2>
      <button onClick={props.openModal} className="menu__modal-trigger-btn">
        Open Modal
      </button>
      <MenuSection items={props.items} name={"Locations"} key={1} />
    </div>
  );
};
