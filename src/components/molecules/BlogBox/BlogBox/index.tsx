import "./style.scss";
interface BlogBoxProps {
  description: string;
  heading: string;
  src: string;
  choice: "vertical" | "horizontal";
  width?: string;
  height?: string;
}
const index = ({
  description,
  heading,
  src,
  choice,
  // width = choice === "vertical" ? "340px" : "500px",
  // height = choice === "vertical" ? "202px" : "285px",
  width = "100%",
  height = "100%",
}: BlogBoxProps) => {
  const flexDirection = choice === "vertical" ? "column" : "row";
  return (
    <div
      className="blog-box-container"
      style={{
        display: "flex",
        flexDirection,
        height,
        width,
      }}
    >
      <div className="blog-box-content">
        <p className="blog-des">{description}</p>
        <h3 className="blog-heading" style={{ width: "70%" }}>
          {heading}
        </h3>
        {choice === "horizontal" && <p className="read-more">Read More →</p>}
      </div>
      <div className="blog-img">
        <img
          src={src}
          alt="blog image"
          style={{ width: "90%", height: "90%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default index;
