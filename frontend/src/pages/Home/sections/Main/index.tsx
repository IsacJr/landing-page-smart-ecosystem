import "./style.css";
import iphone from "../../../../assets/iphone-model.png";
import lamp from "../../../../assets/lamp.png";
import { useContext } from "react";
import Toggle from "../../../../components/Toggle";
import { ThemeContext } from "../../../../context/ThemeContext";

function Main() {
  const { isDarkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="main-wrapper">
      <div className="main-content-background">
        <span>Easy</span>
        <span>Smart</span>
      </div>
      <div className="main-container margin-content">
        <div className="main-content main-content-text">
          <div className="lamp-wrapper">
            <img className="lamp-img" src={lamp} alt="" />
            {isDarkMode && <div className="lamp-light"></div>}
          </div>
          <h1>Enjoy the new</h1>
          <h1>smart Ecosystem</h1>
          <div className="toggle-container">
            <Toggle
              toggled={false}
              onClickCallback={(isToggled: boolean) => setDarkMode(isToggled)}
            ></Toggle>
          </div>
          <div className="text-info">
            <p className="text-info-paragraph">
              Control appliances, thermostats, lights, and other devices
              remotely using a smartphone or tablet through an internet
              connection
            </p>
            <p className="text-info-paragraph">
              Smart home technology provides homeowners with convenience and
              savings
            </p>
          </div>
        </div>
        <div className="main-content main-content-img">
          <img src={iphone} alt="iphone" />
          <img src={iphone} alt="iphone" />
        </div>
      </div>
    </div>
  );
}

export default Main;
