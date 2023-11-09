import BlogBox from "../../molecules/BlogBox/BlogBox/index";
import "./styles.scss";
const index = () => {
  return (
    <div className="recent-blog-container">
      <h2 className="recent-blog-heading">Recent Blogs</h2>
      <div className="first-blog horizontal">
        <BlogBox
          description="Best Practices"
          heading="In design active temper be uneasy. Thirty for remove plenty regard."
          src="/ReviewHorizontal.png"
          choice="horizontal"
        />
      </div>
      <div className="vertical-blog-container">
        <div className="second-blog vertical">
          <BlogBox
            description="Best Practices"
            heading="Partiality on or continuing particular principles as. "
            src="/Review1.png"
            choice="vertical"
          />
        </div>
        <div className="third-blog vertical">
          <BlogBox
            description="Best Practices"
            heading="Village did removed enjoyed explain"
            src="/Review2.png"
            choice="vertical"
          />
        </div>
        <div className="fourth-blog vertical">
          <BlogBox
            description="Best Practices"
            heading="Wise busy past both park when an ye no. Nay likely her length."
            src="/Review3.png"
            choice="vertical"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
