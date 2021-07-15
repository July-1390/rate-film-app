import React from "react";
// import { FiThumbsUp } from "react-icons/fi";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import "./Votes.scss";

const Votes = () => {
  return (
    <>
      <div className="rating">
        <div className="rate-box">
          <div className="rating-plus">
            <MdThumbUp />
          </div>
          <div className="rating-count">
            <p className="rate-num">+7</p>
          </div>
          <div className="rating-minus">
            <MdThumbDown />
          </div>
        </div>
      </div>
    </>
    // <div className="vote-container">
    //   <div className="vote-wrapper">
    //     <h3 className="percentage">35%</h3>
    //     <div className="icon-like">
    //       <FiThumbsUp />
    //     </div>
    //     <div className="count-votes">
    //       <p>170 votes</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Votes;
