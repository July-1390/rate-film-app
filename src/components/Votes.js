import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import "./Votes.scss";

const Votes = () => {
  return (
    <div className="vote-container">
      <div className="vote-wrapper">
        <h3 className="percentage">35%</h3>
        <div className="icon-like">
          <FiThumbsUp />
        </div>
        <div className="count-votes">
          <p>170 votes</p>
        </div>
      </div>
    </div>
  );
};

export default Votes;
