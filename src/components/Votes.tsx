import React from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import {Rating} from '../interfaces/film'
import "./Votes.scss";

const Votes = ({rating}: {rating: Rating}) => {
  return (
    <>
      <div className="rating">
        <div className="rate-box">
          <div className="rating-plus">
            <MdThumbUp />
          </div>
          <div className="rating-count">
            <p className="rate-num">{rating.score_with_sign}</p>
            <p>{rating.votes_count}</p>
          </div>
          <div className="rating-minus">
            <MdThumbDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Votes;
