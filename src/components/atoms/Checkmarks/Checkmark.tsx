import { IoCheckmarkCircle } from "react-icons/io5";
interface CheckmarkProps {
  content: string;
  color?: string;
}
const Checkmark = ({ content, color }: CheckmarkProps) => {
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
          color: " #757095",
          fontSize: "17px",
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
