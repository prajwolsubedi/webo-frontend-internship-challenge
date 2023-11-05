import "./style.scss";
import FeatureBox from "../../molecules/FeatureBox/index";
const index = () => {
  return (
    <div className="extra-feature-container">
      <div className="feature-title-container">
        <h3 className="feature-heading">Features that blows mind</h3>
        <p className="feature-desc">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own.
        </p>
      </div>
      <div className="extra-feature-box-container">
        <FeatureBox
          logoColor="#FF7F5C"
          title="Really boy law county she unable her sister"
          description="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          textAlign="left"
          headingWidth="305px"
        />
        <FeatureBox
          logoColor="#3734A9"
          title="Among sex are leave law built now"
          description="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          textAlign="left"
          descriptionWidth="299px"
        />

        <div className="feature-box-small-container">
          <div className="feature-box-small">
            <h3>Merits behind on afraid or warmly</h3>
          </div>
          <div className="feature-box-small">
            <h3>Believing neglected so so allowance existence</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
