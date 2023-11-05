/// <reference types="vite-plugin-svgr/client" />
import Transaction1 from "../../../assets/Transaction1.svg?react";
import "./style.scss";

interface ClientTransactionBox {
  price: string;
  receivedFrom: string;
}
const index = ({ price, receivedFrom }: ClientTransactionBox) => {
  return (
    <div className="transaction-container">
      <div className="client-pic">
        <Transaction1 />
      </div>
      <div className="transaction-content">
        <h4 className="client-price"> + {price}</h4>
        <p className="client-name">{receivedFrom}</p>
      </div>
    </div>
  );
};

export default index;
