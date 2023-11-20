import "./style.scss";
interface FeatureBoxProps {
  count?: string;
  title: string;
  description: string;
  logoColor: string;
  logoPosition?: string;
  textAlign?:
    | "center"
    | "justify"
    | "left"
    | "right"
    | "start"
    | "end"
    | "match-parent";
  border?: string;
}
const index = ({
  count,
  title,
  description,
  logoColor,
  textAlign = "center",
  logoPosition = "center",
  border,
}: FeatureBoxProps) => {
  return (
    <div className="feature-box-container" style={{ border }}>
      <h3 className="feature-box-count">{count}</h3>
      <div
        className="feature-box-logo"
        style={{ margin: logoPosition === "center" ? "auto" : "0px" }}
      >
        <div
          className="small-line"
          style={{
            width: "40px",
            height: "10px",
            marginBottom: "5px",
            backgroundColor: "#000",
          }}
        ></div>
        <div
          style={{ width: "50px", height: "35px", backgroundColor: logoColor }}
        ></div>
      </div>
      <div className="feature-box-content-container">
        <h3
          className="feature-box-title"
          style={{
            textAlign,
            width: logoPosition === "center" ? "90%" : "100%",
          }}
        >
          {title}
        </h3>
        <p
          className="feature-box-desc"
          style={{
            textAlign,
            width: logoPosition === "center" ? "70%" : "100%",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default index;
