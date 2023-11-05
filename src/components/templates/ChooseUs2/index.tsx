import ContentBox from "../../molecules/ContentBox/index";
import "./style.scss";
const index = () => {
  return (
    <div className="choose-us-container">
      <div className="choose-us-content">
        <p className="choose-us-title">WHY CHOOSE US</p>
        <h3 className="choose-us-heading">
          Save money with proper transaction
        </h3>
        <p className="choose-us-desc">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
        <div className="content-box-container">
        <ContentBox
          content="Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows ."
          speaker="Mike Taylor, Web Designer"
          height="180px"
          width="479px"
        />

        </div>
      </div>
      <div className="choose-us2-gallery">
        <img src="/chooseus2.png" className="choose-us2-img" />
      </div>
    </div>
  );
};

export default index;
