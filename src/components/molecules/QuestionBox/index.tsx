interface MoreQuestionProps {
  width?: string;
  height?: string;
  btnContent?: string;
  heading?: string;
  desc?: string;
}

import { FaMessage } from "react-icons/fa6";
const index = ({
  width,
  height,
  btnContent,
  heading,
  desc,
}: MoreQuestionProps) => {
  return (
    <div
      style={{
        width: "401px",
        height: "520px",
        borderRadius: "10px",
        border: "1px solid #CFCFCF",
        background: "#FFF",
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        fontFamily: "'Manrope', sans-serif",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FaMessage style={{ fontSize: "70px" }} />
        <h3>{heading}</h3>
        <p style={{ width: "333px", fontSize: "16px", textAlign: "center" }}>
          {desc}
        </p>
      </div>
      <div>
        <button
          style={{
            width: "337px",
            height: "76px",
            background: "#FF7F5C",
            border: "none",
            fontSize: "16px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {btnContent}
        </button>
      </div>
    </div>
  );
};

export default index;
