import FAQBox from "../../molecules/FAQBox/index";
import { useState } from "react";
import "./style.scss"
const index = () => {
  const [showBox, setShowBox] = useState<number>(1);
  const handleShowBox = (id: number) => {
    setShowBox(id);
  };
  return (
    <div>
      <div className="faq-box">
        <FAQBox
          id={1}
          title="The expense windows adapted sir. Wrong widen drawn."
          desc="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. "
          handleShowBox={handleShowBox}
          showDesc={showBox}
        />
      </div>
      <div className="faq-box">
        <FAQBox
          id={2}
          title="Six curiosity day assurance bed necessary?"
          desc="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. "
          handleShowBox={handleShowBox}
          showDesc={showBox}
        />
      </div>
      <div className="faq-box">
        <FAQBox
          id={3}
          title="Produce say the ten moments parties?"
          desc="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. "
          handleShowBox={handleShowBox}
          showDesc={showBox}
        />
      </div>
      <div className="faq-box">
        <FAQBox
          id={4}
          title="Simple innate summer fat appear basket his desire joy?"
          desc="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. "
          handleShowBox={handleShowBox}
          showDesc={showBox}
        />
      </div>
      <div className="faq-box">
        <FAQBox
          id={5}
          title="Outward clothes promise at gravity do excited?"
          desc="Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. "
          handleShowBox={handleShowBox}
          showDesc={showBox}
        />
      </div>
    </div>
  );
};

export default index;
