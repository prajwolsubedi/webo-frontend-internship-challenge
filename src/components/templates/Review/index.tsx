/// <reference types="vite-plugin-svgr/client" />
import Review from "../../../assets/Review.svg?react";
import {BiSolidUser} from "react-icons/bi"
import {AiFillStar} from "react-icons/ai"
import "./style.scss";
const index = () => {
  return (
    <div className="review-container">
      <div className="review-desc">
        <p>We speak with our powerfull statistics</p>
      </div>
      <div>
        <h3 className="review-quantity">1M+</h3>
        <p className="review-name"> <BiSolidUser className="review-icons" /> Active Users</p>
      </div>
      <div>
        <h3 className="review-quantity">30K+</h3>
        <p className="review-name">  <AiFillStar className="review-icons" />5-Stars Reviews</p>
      </div>
      <div>
        <h3 className="review-quantity">$252M</h3>
        <p className="review-name">  <AiFillStar className="review-icons" />Transactions</p>
      </div>
      <div className="review-svg-container">
        <Review />
      </div>
    </div>
  );
};

export default index;
