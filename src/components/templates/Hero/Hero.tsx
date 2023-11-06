/// <reference types="vite-plugin-svgr/client" />
import "./Hero.scss";
import Navbar from "../../molecules/Navbar/Navbar";
import BlueButton from "../../atoms/Buttons/BlueButton";
import IconButton from "../../atoms/Buttons/IconButton/IconButton";
import Checkmark from "../../atoms/Checkmarks/Checkmark";
import HeroSvg from "../../../assets/HeroSvg.svg?react";
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
            <div className="hero-blue-btn">
              <BlueButton content="Get Started" />
            </div>
            <div className="hero-icn-btn">
              <IconButton content="See how it works" />
            </div>
          </div>
          <div className="hero-footer-btns">
            <Checkmark content="Free Register" color="#3734A9" />
            <Checkmark content="Great Service" color="#3734A9" />
          </div>
        </div>

        <div className="hero-images">
          <img src="heroImages/Image2.png" className="hero-image-first" />
          <img src="heroImages/Image1.png" className="hero-img-second" />
          <img src="heroImages/LogoText.png" className="hero-logo-img" />
          <div className="hero-image-third-container">
            <div className="hero-svg-container">
              <HeroSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
