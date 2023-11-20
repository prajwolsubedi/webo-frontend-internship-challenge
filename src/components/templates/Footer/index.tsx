import "./style.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { SiTwoo } from "react-icons/si";
import EmailSubscribe from "../../atoms/EmailSubscribe/index";
const index = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>
          <p className="footer-heading">AR Shakir</p>
          <p className="footer-desc">
            Finance helps companies <br /> manage payments easily.
          </p>
          <div className="footer-logo-container">
            <FaLinkedinIn />
            <BsMessenger />
            <FaTwitter />
            <SiTwoo />
          </div>
        </div>
        <div>
          <p className="footer-heading">Company</p>
          <ul className="footer-list">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Resources</p>
          <ul className="footer-list">
            <li>Proposal Template</li>
            <li>Invoice Template</li>
            <li>Tutorial</li>
            <li>How to write a contract</li>
          </ul>
        </div>
        <div>
          <p className="footer-heading">Join Our Newsletter</p>
          <EmailSubscribe />
          <p className="footer-desc">
            * Will send you weekly updates for your better <br /> finance
            management.
          </p>
        </div>
      </div>
      <div className="footer-dash"></div>

      <div>
        <p className="footer-copyright">
          Copyright @ AR Shakir 2022. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default index;
