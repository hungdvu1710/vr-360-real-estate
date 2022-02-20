import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="menu-item">
      Menu item {props.item}
    </div>
  );
};

export default MenuItem;
