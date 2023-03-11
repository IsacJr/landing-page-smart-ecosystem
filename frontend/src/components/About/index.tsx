import "./style.css";
import echoDots from "../../assets/echo-dots.jpg";
import iphoneUsing from "../../assets/iphone-using.jpg";

function About() {
  return (
    <div className="about-content">
      <div className="about-info">
        <div className="about-info-title">
          <span>Discover new horizons</span>
          <span>of confort</span>
        </div>
        <div className="about-info-description">
          <p>
            A smart home app will monitor and control home attributes such as
            lighting, climate, entertainment systems, and appliances.
          </p>
        </div>
      </div>
      <div className="about-pictures">
        <img src={iphoneUsing} alt="" />
        <img src={echoDots} alt="" />
      </div>
    </div>
  );
}

export default About;
