import { Card } from "../Card";
import "./style.css";
import echo from "../../assets/echo-dots.jpg";

export const Product = () => {
  return (
    <div className="product-content">
      <div className="product-content-title">
        <span>Combine a perfect</span>
        <span>ecosystem for your home</span>
      </div>
      <div className="product-content-cards">
        <Card picture={echo} text="Echo dots amazon"></Card>
        <Card picture={echo} text="Echo dots amazon"></Card>
        <Card picture={echo} text="Echo dots amazon"></Card>
      </div>
    </div>
  );
};
