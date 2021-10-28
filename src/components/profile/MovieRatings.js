import React from "react";

import { RiStarSFill } from "react-icons/ri";
import "./MovieRatings.scss";

const MovieRatings = () => {
  return (
    <>
      <h2>Content 1</h2>
      <p>Lorem ipsum dolor sit amet, consectet</p>

      <div className="one-film">
        <div className="rating-poster">
          <img
            alt="poster"
            src="https://resizing.flixster.com/5avIoBUmkdWfFcA8QOn0VM8BI28=/170x243/v2/https://resizing.flixster.com/xQQsLC7IJypTxyRXeOvnPwdEWwE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzE0ZWFjM2Y1LTYzNTYtNGIwNS1iNGU2LTk0NTA2MGQ3NjY3NC53ZWJw"
          />
        </div>
        <div className="name-of-film">
          <p className="rating-movie-title">Drive</p>
          <p className="translate-name">Драйв, 2011</p>
          <p className="genre-of-the-film">USA, Action/Crime</p>
        </div>
        <div className="rating-stars">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
      </div>
    </>
  );
};

export default MovieRatings;
