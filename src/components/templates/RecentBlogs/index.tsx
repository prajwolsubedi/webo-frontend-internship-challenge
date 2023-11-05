import HorizontalBlogBox from "../../molecules/BlogBox/HorizontalBlogBox/index";
import "./styles.scss";
const index = () => {
  return (
    <div className="recent-blog-container">
      <h2 className="recent-blog-heading">Recent Blogs</h2>
      <HorizontalBlogBox
        description="Best Practices"
        heading="In design active temper be uneasy. Thirty for remove plenty regard."
        src="/ReviewHorizontal.png"
        choice="horizontal"
      />
      <div className="vertical-blog-container">
        <HorizontalBlogBox
          description="Best Practices"
          heading="Partiality on or continuing particular principles as. "
          src="/Review1.png"
          choice="vertical"
        />
        <HorizontalBlogBox
          description="Best Practices"
          heading="Village did removed enjoyed explain"
          src="/Review2.png"
          choice="vertical"
        />
        <HorizontalBlogBox
          description="Best Practices"
          heading="Wise busy past both park when an ye no. Nay likely her length."
          src="/Review3.png"
          choice="vertical"
        />
      </div>
    </div>
  );
};

export default index;
