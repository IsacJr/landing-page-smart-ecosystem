import "./style.css";
import iphone from "../../../../assets/iphone-model.png";
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { openInNewTab } from "../../../../utils/Util";

export const Download = () => {
  return (
    <div className="download-content">
      <div className="download-content-text">
        <div className="download-content-title">
          <span>Make your</span>
          <span>living space</span>
          <span>better now</span>
        </div>
        <div className="download-content-description">
          <p>
            download the application in the App store or Google store and create
            comfort in your home.
          </p>
        </div>
        <div className="download-content-buttons">
          <span className="download-content-buttons-title">Download app</span>
          <div className="download-content-buttons-wrapper">
            <button
              className="download-app-store-btn"
              onClick={() => openInNewTab("https://www.apple.com/app-store")}
            >
              <DiApple></DiApple>
              <span>App store</span>
            </button>
            <button
              className="download-app-store-btn"
              onClick={() => openInNewTab("https://play.google.com/")}
            >
              <DiAndroid></DiAndroid>
              <span>Google play</span>
            </button>
          </div>
        </div>
      </div>
      <img src={iphone} alt="" />
    </div>
  );
};
