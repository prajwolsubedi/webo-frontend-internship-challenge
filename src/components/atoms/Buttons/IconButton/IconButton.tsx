/// <reference types="vite-plugin-svgr/client" />
interface IconButtonProps {
  content: string;
}
import "./IconButtonStyle.scss";
import "./IconButtonStyle.scss";
import HeroBtnIcon from "../../../../assets/heroBtnIcon.svg?react";
const IconButton = ({ content }: IconButtonProps) => {
  return (
    <div className="play-btn">
      <HeroBtnIcon style={{width: "30%", height: "100%"}} />
      <p style={{marginLeft: "10px", fontSize: "16px", color: "#3734A9"}}>{content}</p>
    </div>
  );
};

export default IconButton;
