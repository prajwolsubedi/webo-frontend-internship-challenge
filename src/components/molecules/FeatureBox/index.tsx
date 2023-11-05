import "./style.scss";
interface FeatureBoxProps {
  count?: string;
  title: string;
  description: string;
  logoColor: string;
  textAlign?:
    | "center"
    | "justify"
    | "left"
    | "right"
    | "start"
    | "end"
    | "match-parent";
    headingWidth?: string;
    descriptionWidth?: string;
}
const index = ({
  count,
  title,
  description,
  logoColor,
  textAlign = "center",
  headingWidth = "276px",
  descriptionWidth = "270px"
}: FeatureBoxProps) => {
  return (
    <div className="feature-box-container">
      <h3 className="feature-box-count">{count}</h3>
      <div className="feature-box-logo">
        <div
          style={{
            width: "42px",
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
        <h3 className="feature-box-title" style={{ textAlign, width: headingWidth}}>
          {title}
        </h3>
        <p className="feature-box-desc" style={{ textAlign, widows: descriptionWidth }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default index;
