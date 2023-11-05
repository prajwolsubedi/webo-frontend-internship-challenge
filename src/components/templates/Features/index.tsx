import React from "react";
import FeatureBox from "../../molecules/FeatureBox/index";
const index = () => {
  return (
    <div
      style={{
        padding: "72px 117px",
        background: "#FAFBFF",
        display: "flex",
        justifyContent: "space-between",
        border: "2px solid black",
      }}
    >
      <FeatureBox
        count="01"
        description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
        logoColor="#3734A9"
        title="Review transactions"
      />
      <FeatureBox
        count="02"
        description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
        logoColor="#FF7F5C"
        title="Connect wallets & companies"
      />
      <FeatureBox
        count="03"
        description="Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
        logoColor="#FDBC64"
        title="Get income insights"
      />
    </div>
  );
};

export default index;
