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
      <HeroBtnIcon />
      <button>{content}</button>
    </div>
  );
};

export default IconButton;
