import "./style.css";
import iphoneCovere from "../../assets/iphone-cover-app.jpg";

const myStyle: React.CSSProperties = {
  backgroundImage: `url(${iphoneCovere})`,
};

export const MobileApp = () => {
  return (
    <div className="mobile-app-content" style={myStyle}>
      <div className="mobile-app-text">
        <span className="mobile-app-title">All controls, one app</span>
        <span className="mobile-app-description">
          Just take your smartphone and control your home ecosystem wharever you
          are
        </span>
      </div>
    </div>
  );
};
