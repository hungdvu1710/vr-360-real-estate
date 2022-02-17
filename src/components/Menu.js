import './Menu.css'

export const Menu = (props) => {
  return (
    <div className={`menu ${props.isMenuOpen ? "menu-open" : ""}`}>
      <h2>Example App Menu</h2>

      {props.items.map((i) => (
        <div className="menu__item" key={i}>
          Menu item {i}
        </div>
      ))}
    </div>
  );
};
