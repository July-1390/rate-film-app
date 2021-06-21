import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

// import { defaultFilms } from "../data";
import { getFilm } from "../apiServices";
import "./FilmPage.css";

const FilmPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery("film", () => getFilm(id));

  // useEffect(() => {
  // loadFilm(id).then((film) => {
  //   setFilm(film);
  // });
  // }, [isError]);

  // useEffect(() => {
  //   console.log(isError, error);
  // }, [isError]);

  return (
    <div>
      <Link to="/" className="btn--back">
        <span>Back</span>
      </Link>
      {!isLoading ? (
        <div className="film-page-container">
          <div className="page-film-poster-wrapper">
            <img
              className="page-film-poster"
              src={data.poster_url}
              alt="film poster"
            />
          </div>
          <div className="page-film-content">
            <h2 className="page-film-title">{data.title}</h2>
            <h3>
              {data.title_ru}, {data.release_year}
            </h3>
            <p className="page-film-country">
              {data.country}, {data.genre}
            </p>
            <p className="film-page-description">{data.description}</p>

            <div>
              <p>Actors:</p>
              <div className="">
                {data.actors.map((actor) => (
                  <img
                    key={actor.id}
                    className="actors"
                    alt="actors"
                    src={actor.photo_url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default FilmPage;
