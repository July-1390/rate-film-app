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
            <span className="rate-num">{rating.score_with_sign}</span>
            <div className="vote-num">
              <span className="all-votes">Votes: {rating.votes_count}</span>              
            </div>
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
