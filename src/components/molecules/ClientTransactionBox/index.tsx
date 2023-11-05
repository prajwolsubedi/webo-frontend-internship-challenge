import ClientTransaction from "../../atoms/ClientTransaction/index";
import "./style.scss";
const index = () => {
  return (
    <div className="transaction-box-container">
      <div className="first bubble"></div>
      <div className="second bubble"></div>
      <div className="third bubble"></div>
      <div className="transaction frst">
        <ClientTransaction
          price="$28,900"
          receivedFrom="Received from Michael V"
        />
      </div>
      <div className="transaction scnd">
        <ClientTransaction
          price="$28,900"
          receivedFrom="Received from Michael V"
        />
      </div>
      <div className="transaction thrd">
        <ClientTransaction
          price="$28,900"
          receivedFrom="Received from Michael V"
        />
      </div>
      <div className="transaction frth">
        <ClientTransaction
          price="$28,900"
          receivedFrom="Received from Michael V"
        />
      </div>
    </div>
  );
};

export default index;
