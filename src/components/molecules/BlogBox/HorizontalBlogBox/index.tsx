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
  width = choice === "vertical" ? "382px" : "500px",
  height = choice === "vertical" ? "202px" : "285px",
}: HorizontalBlogBoxProps) => {
  const flexDirection = choice === "vertical" ? "column" : "row";
  const headingWidth = choice === "vertical" ? "382px" : "524px";
  return (
    <div
      className="horzntal-review-container"
      style={{
        display: "flex",
        flexDirection,
        height: choice === "vertical" ? "436px" : "none",
      }}
    >
      <div className="horzntal-review-content">
        <p className="review-des">{description}</p>
        <h3 className="blog-heading" style={{ width: headingWidth }}>
          {heading}
        </h3>
        {choice === "horizontal" && <p className="read-more">Read More →</p>}
      </div>
      <div className="horzntal-review-img">
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
