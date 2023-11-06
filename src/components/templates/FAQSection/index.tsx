import FAQ from "../../organisms/FAQ/index";
import QuestionBox from "../../molecules/QuestionBox/index";
import "./style.scss";
const index = () => {
  return (
    <div className="faq-section-container">
      <div>
        <h3 className="faq-heading">Frequently asked questions</h3>
      </div>
      <div className="faq-box-container">
        <div className="faq-accordion">
          <FAQ />
        </div>
        <div className="more-question">
          <QuestionBox
            heading="Do you have more questions?"
            desc="End-to-end payments and financial management in a single solution. Meet the right platform to help realize."
            btnContent="Shoot a Direct Mail"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
