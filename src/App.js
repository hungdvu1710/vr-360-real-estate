import "./App.css";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Menu } from './components/Menu'
import { ReactDimmer } from "react-dimmer";

const App = () => {
  const script = document.createElement("script");
  script.innerHTML = `embedpano({xml:"tour.xml", target:"pano", html5:"only", mobilescale:1.0, passQueryParameters:"startscene,startlookat"});`;
  useEffect(() => {
    document.getElementById("pano").appendChild(script);
  });
  const [menuItems, setMenuItems] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
    setMenuItems((prevItems) => {
      return [1, 2, 3, 4, 5];
    });
  };

  return (
    <>
      <div className="app">
        <div className="app__header">
          <AiOutlineMenu className="app__menu-btn" onClick={handleMenu} />
          <h2>Nam Cau Kien</h2>
          <div className="app__nav"></div>
        </div>
        <div id="pano"></div>
      </div>
      <Menu isMenuOpen={isMenuOpen} items={menuItems} />
      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenuOpen}
        zIndex={100}
        blur={1.5}
      />
    </>
  );
};

export default App;
