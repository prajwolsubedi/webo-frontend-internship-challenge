import "./style.scss";
import FeatureBox from "../../molecules/FeatureBox/index";
const index = () => {
  return (
    <div className="feature-container">
      <div className="feature-box">
        <FeatureBox
          count="01"
          description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
          logoColor="#3734A9"
          title="Review transactions"
          logoPosition="center"
        />
      </div>
      <div className="feature-box">
        <FeatureBox
          count="02"
          description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
          logoColor="#FF7F5C"
          title="Connect wallets & companies"
          logoPosition="center"
        />
      </div>
      <div className="feature-box">
        <FeatureBox
          count="03"
          description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
          logoColor="#FDBC64"
          title="Get income insights"
          logoPosition="center"
        />
      </div>
    </div>
  );
};

export default index;
