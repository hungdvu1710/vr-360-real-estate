import "./App.css";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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
    "scene_den_ky_vat_2_8k",
    "scene_den_ky_vat_5_8k",
    "scene_den_ky_vat_6_8k",
    "scene_den_ky_vat_7_8k",
    "scene_dieu_hanh_11_8k",
    "scene_dieu_hanh_1_8k",
    "scene_nha_may_xu_ly_nuoc_thai_5_8k",
    "scene_3_nha_dieu_hanh_8k",
    "scene_4_vuon_ky_vat_8k",
    "scene_5_khu_hau_can_8k",
    "scene_8_nha_may_xu_ly_nuoc_thai_8k",
    "scene_11_giua_ho_nuoc_xu_ly_8k",
    "scene_15_trung_tam_2_8k",
    "scene_16_du_an_2_trung_tam_8k",
    "scene_18_du_an_2_dau_8k_equi",
  ];

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState);
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
