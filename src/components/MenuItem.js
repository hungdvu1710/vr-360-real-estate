import "./MenuItem.css";

const MenuItem = (props) => {
  return (
    <div className="menu-item" key={props.item}>
      Menu item {props.item}
    </div>
  );
};

export default MenuItem;
