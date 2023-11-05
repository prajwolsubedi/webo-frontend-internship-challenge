import { IoCheckmarkCircle } from "react-icons/io5";
interface CheckmarkProps {
  content: string;
  color?: string;
  fontSize?: string;
  textColor?: string;
}
const Checkmark = ({ content, color, fontSize, textColor }: CheckmarkProps) => {
  const iconStyle = {
    width: "30px",
    height: "30px",
    color: color || "green",
    marginRight: "5px",
  };

  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        marginRight: "24px",
      }}
    >
      <IoCheckmarkCircle style={iconStyle} />
      <p
        style={{
          color: textColor || "#757095",
          fontSize: fontSize || "17px",
          fontWeight: "500",
          lineHeight: "30px",
          letterSpacing: "-0.34px",
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default Checkmark;
