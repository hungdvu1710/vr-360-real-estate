import "./App.css";
import { useEffect, useState } from "react";
import { Menu } from "./components/Menu";
import { ReactDimmer } from "react-dimmer";
import Modal from "./components/Modal";

const App = () => {
  const script = document.createElement("script");
  script.innerHTML = `embedpano({xml:"tour.xml", target:"pano", html5:"only", mobilescale:1.0, passQueryParameters:"startscene,startlookat"});`;
  // Execute useEffect only once on start app
  useEffect(() => {
    document.getElementById("pano").appendChild(script);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModal] = useState(true);

  const sceneList = [
    {name: "Nam Cau Kien Office Building", scene: "scene_3_nha_dieu_hanh_8k"},
    {name: "General Vo Nguyen Giap Memorial Garden", scene: "scene_4_vuon_ky_vat_8k"},
    {name: "Service Area For Professionals", scene: "scene_5_khu_hau_can_8k"},
    {name: "Wastewater treatment plant", scene: "scene_8_nha_may_xu_ly_nuoc_thai_8k"},
    {name: "Kyosei-no-niwa Japanese Garden", scene: "scene_11_giua_ho_nuoc_xu_ly_8k"},
    {name:"Overview of Nam Cau Kien IP", scene: "scene_18_du_an_2_dau_8k_equi"},
  ];

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="app">
        <div className="app__header">
          <span className="app__menu-btn" onClick={handleMenu}></span>
          <div className="app__nav"></div>
        </div>
        <div id="pano"></div>
      </div>
      <Menu isMenuOpen={isMenuOpen} items={sceneList} openModal={() => {setModal(true)}} />
      {isModalOpen && <Modal closeModal={() => {setModal(false)}} />}

      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={100}
        blur={1.5}
      />
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
