import ClientTransactionBox from "../../molecules/ClientTransactionBox/index";
import Checkmark from "../../atoms/Checkmarks/Checkmark";
import "./style.scss";
const index = () => {
  return (
    <div className="choose-us-container">
      <ClientTransactionBox />
      <div className="choose-us-content">
        <p className="choose-us-title">WHY CHOOSE US</p>
        <h3 className="choose-us-heading">
          Track your payments on the go with the best way possible
        </h3>
        <p className="choose-us-desc">
          Indulgence way everything joy alteration boisterous the attachment.
          Party we years to order allow asked of.
        </p>
        <div className="divider"></div>
        <div className="choose-us-checkmark-container">
          <Checkmark
            color="#FDBC64"
            content="Get Overview at a glance"
            fontSize="19px"
            textColor="#505887"
          />
          <Checkmark
            color="#FDBC64"
            content="Deoposit funds easily, securlity"
            fontSize="19px"
            textColor="#505887"
          />
          <Checkmark
            color="#FDBC64"
            content="Get Live Support"
            fontSize="19px"
            textColor="#505887"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
