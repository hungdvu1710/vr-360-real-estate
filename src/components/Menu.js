import "./Menu.css";
import MenuSection from "./MenuSection";

export const Menu = (props) => {
  return (
    <div className={`menu ${props.isMenuOpen ? "menu-open" : ""}`}>
      <h2>Menu</h2>
      <MenuSection items={props.items} name={"Group 1"} key={1} />
    </div>
  );
};
