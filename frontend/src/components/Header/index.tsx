import "./style.css";
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { openInNewTab } from "../../utils/Util";

function HeadNavbar() {
  return (
    <div className="headnavbar margin-content">
      <div className="menu">
        <ul>
          <li>{/* <a href="#">home</a> */}</li>
          <li>{/* <a href="#">about</a> */}</li>
        </ul>
      </div>
      <div className="app-store-container">
        <button
          className="app-store-btn"
          onClick={() => openInNewTab("https://www.apple.com/app-store")}
        >
          <DiApple></DiApple>
          <span>App store</span>
        </button>
        <button
          className="app-store-btn"
          onClick={() => openInNewTab("https://play.google.com/")}
        >
          <DiAndroid></DiAndroid>
          <span>Google play</span>
        </button>
      </div>
    </div>
  );
}

export default HeadNavbar;
