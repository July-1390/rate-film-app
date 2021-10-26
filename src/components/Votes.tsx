import React, {useEffect, useState} from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import {MdThumbUp, MdThumbDown} from 'react-icons/md';
import {Rating} from '../interfaces/film'
import "./Votes.scss";

const Votes = ({rating}: {rating: Rating}) => {

const [userVote, setUserVote] = useState(0)

useEffect(() => {
  setUserVote(rating.user_vote)
},[])

const handleSubmit = (value: number) => {
  setUserVote(value)
}

  return (
    <>
      <div className="rating">
        <div className="rate-box">
          <div className="rating-props">
            {userVote > 0 ? <button className="rating-props-button-clicked" disabled><MdThumbUp /></button> : <button className="rating-props-button" onClick={() => handleSubmit(1)}><FiThumbsUp /></button>}                              
          </div>
          <div className="rating-count">
            <span className="rate-num">{rating.score_with_sign}</span>
            <div className="vote-num">
              <span className="all-votes">Votes: {rating.votes_count}</span>              
            </div>
          </div>
          <div className="rating-const">
          {userVote < 0 ? <button className="rating-const-button-clicked" disabled><MdThumbDown /></button> : <button className="rating-const-button" onClick={() => handleSubmit(-1)}><FiThumbsDown /></button>}
          </div>
        </div> 
      </div>
    </>
  );
};

export default Votes;
