import React from "react";
import "./BlueButton.scss";
interface BlueBotton {
  content: string;
}
const BlueButton = ({ content }: BlueBotton) => {
  return <button className="blue-btn">{content}</button>;
};

export default BlueButton;
