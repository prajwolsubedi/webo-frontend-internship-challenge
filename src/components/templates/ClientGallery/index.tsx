/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import "./style.scss";
import Client1 from "../../../assets/client1.svg?react";
import Client2 from "../../../assets/client2.svg?react";
import Client3 from "../../../assets/client3.svg?react";
import Client4 from "../../../assets/client4.svg?react";
import Client5 from "../../../assets/client5.svg?react";
import Client6 from "../../../assets/client6.svg?react";
import Client7 from "../../../assets/client7.svg?react";
const index = () => {
  return (
    <div className="client-gallery-container">
      <h3 className="client-gallery-heading">
        Over 32k+ software businesses growing with AR Shakir.
      </h3>
      <div className="logo-container">
        <Client1 />
        <Client2 />
        <Client3 />
        <Client4 />
        <Client5 />
        <Client6 />
        <Client7 />
      </div>
    </div>
  );
};

export default index;
