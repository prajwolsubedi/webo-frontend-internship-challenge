import "./Hero.scss";
import Navbar from "../molecules/Navbar";
import BlueButton from "../atoms/Buttons/BlueButton";
import IconButton from "../atoms/Buttons/IconButton/IconButton";
import Checkmark from "../atoms/Checkmarks/Checkmark";
const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">
            Managing freelance payments has never been easier.
          </h1>
          <p className="hero-para">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing
          </p>
          <div className="hero-buttons">
            <BlueButton content="Get Started" />
            <IconButton content="See how it works" />
          </div>
          <div className="hero-footer-btns">
            <Checkmark content="Free Register" color="#3734A9" />
            <Checkmark content="Great Service" color="#3734A9" />
          </div>
        </div>

        <div className="hero-images">
          <img src="heroImages/Image2.png" />
          <img src="heroImages/Image1.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
