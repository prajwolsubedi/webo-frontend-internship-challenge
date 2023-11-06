import "./style.scss";
interface HorizontalBlogBoxProps {
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
  width = choice === "vertical" ? "340px" : "500px",
  height = choice === "vertical" ? "202px" : "285px",
}: HorizontalBlogBoxProps) => {
  const flexDirection = choice === "vertical" ? "column" : "row";
  const headingWidth = choice === "vertical" ? "362px" : "524px";
  return (
    <div
      className="blog-box-container"
      style={{
        display: "flex",
        flexDirection,
        height: choice === "vertical" ? "436px" : "none",
        width: choice === "vertical"? "380px" : "100%",
      }}
    >
      <div className="blog-box-content">
        <p className="blog-des">{description}</p>
        <h3 className="blog-heading" style={{ width: headingWidth }}>
          {heading}
        </h3>
        {choice === "horizontal" && <p className="read-more">Read More →</p>}
      </div>
      <div className="blog-img">
        <img
          src={src}
          alt="blog image"
          style={{ width, height, objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default index;
