import { useState } from "react";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { rateFilm } from "../apiServices";
import { Rating } from "../interfaces/film";
import { getUserToken } from "../localStorageUserServices";
import "./Votes.scss";

const Votes = ({ rating, filmId }: { rating: Rating; filmId: number }) => {
  const [innerRating, setInnerRating] = useState(rating);

  const handleSubmit = (newVoteValue: number) => {
    const token = getUserToken();

    if (token === null) {
      alert("Only registered users can vote.");
      return;
    }

    const newRating = {
      ...innerRating,
      user_vote: newVoteValue,
    };

    setInnerRating(newRating);

    rateFilm(filmId, newVoteValue, token).then((res) => {
      setInnerRating(res.data);
    });
  };

  return (
    <>
      <div className="rating">
        <div className="rate-box">
          <div className="rating-props">
            {innerRating.user_vote > 0 ? (
              <button className="rating-props-button-clicked" disabled>
                <MdThumbUp />
              </button>
            ) : (
              <button
                className="rating-props-button"
                onClick={() => handleSubmit(1)}
              >
                <FiThumbsUp />
              </button>
            )}
          </div>
          <div className="rating-count">
            <span className="rate-num">{innerRating.score_with_sign}</span>
            <div className="vote-num">
              <span className="all-votes">
                Votes: {innerRating.votes_count}
              </span>
            </div>
          </div>
          <div className="rating-const">
            {innerRating.user_vote < 0 ? (
              <button className="rating-const-button-clicked" disabled>
                <MdThumbDown />
              </button>
            ) : (
              <button
                className="rating-const-button"
                onClick={() => handleSubmit(-1)}
              >
                <FiThumbsDown />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Votes;
