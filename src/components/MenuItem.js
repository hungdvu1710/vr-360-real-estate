import "./MenuItem.css";

const MenuItem = (props) => {
  const handleClick = (event) => {
    const krpano = document.getElementById("krpanoSWFObject");
    // krpano loadscene syntax:
    krpano.call(`loadscene(${event.target.dataset.scene},null,MERGE,OPENBLEND(1.0, -0.5, 0.3, 0.8, linear))`);
  };
  return (
    <div className="menu-item" data-scene={props.item} onClick={handleClick}>
      {props.item}
    </div>
  );
};

export default MenuItem;
