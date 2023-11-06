import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
interface FAQBoxProps {
  showDesc?: number;
  title: string;
  desc?: string;
  id: number;
  handleShowBox: (id: number) => void;
}
const index = ({ showDesc, title, desc, id, handleShowBox }: FAQBoxProps) => {
  const handleDescShow = () => {
    handleShowBox(id);
  };
  const descDisplay = showDesc === id ? "block" : "none";
  const containerStyle = {
    width: "751px",
    borderRadius: "10px",
    border: "1px solid #CFCFCF",
    background: "#fff",
    fontFamily: "'Manrope', sans-serif",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    padding: "25px 27px 27px 23px",
    justifyContent: "space-between",
    marginBottom: "15px"
  } as React.CSSProperties;
  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ fontSize: "22px", fontWeight: "800", lineHeight: "22px" }}>
          {title}
        </h3>
        <AiOutlinePlus
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={() => handleDescShow()}
        />
      </div>
      <div style={{ display: descDisplay }}>
        <p
          style={{
            width: "644px",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "31px",
            letterSpacing: "-0.32px",
            cursor: "pointer",
            marginTop: "23px",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export default index;
