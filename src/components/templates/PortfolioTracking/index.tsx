import ContentBox from "../../molecules/ContentBox/index";
import "./style.scss";
const index = () => {
  return (
    <div className="portfolio-container">
      <div>
        <h1 className="portfolio-heading">Automated portfolio tracking</h1>
        <p className="portfolio-desc">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing.
        </p>
      </div>
      <ContentBox
        height="200px"
        width="402px"
        content="Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen."
        speaker="Mike Taylor, Web Designer"
      />
    </div>
  );
};

export default index;
