import "./style.css";
import echo from "../../../../assets/echo-dots.jpg";
import spotiligh from "../../../../assets/philips-hue-spotlights.jpg";
import robotCleaner from "../../../../assets/robot-cleaner.jpg";
import { Card } from "../../../../components/Card";

export const Product = () => {
  return (
    <div className="product-content">
      <div className="product-content-title">
        <span>Combine a perfect</span>
        <span>ecosystem for your home</span>
      </div>
      <div className="product-content-cards">
        <Card picture={spotiligh} text="Smart Spootilight Phillips"></Card>
        <Card picture={echo} text="Echo Dots Amazon"></Card>
        <Card picture={robotCleaner} text="Robot Cleaner Xiaomi"></Card>
      </div>
    </div>
  );
};
