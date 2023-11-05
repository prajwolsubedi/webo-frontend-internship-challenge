/// <reference types="vite-plugin-svgr/client" />
interface ContentBoxProps {
  content: string;
  speaker: string;
  width?: string;
  height?: string;
}
import "./style.scss";
import ContentBox from "../../../assets/ContentBox.svg?react";
const index = ({ content, speaker, width, height }: ContentBoxProps) => {
  const contentBoxStyles = {
    width,
    height,
    color: "#000",
    fontFamily: "Manrope, 'sans-serif'",
    background: "#c4c4c4",
    borderRadius: "20px",
    fontStyle: "normal",
    opacity: "0.7",
    padding: "38px 34px 73px",
    fontSize: "15px",
    fontWeight: "600",
    lineHeight: "22px",
    letterSpacing: "-0.3px",
    position: "relative",
  } as React.CSSProperties;
  return (
    <div style={contentBoxStyles}>
      <ContentBox className="content-icon" />
      <h3 style={{ margin: "0 0 18px 0" }}>{content}</h3>
      <p>- {speaker}</p>
    </div>
  );
};

export default index;
