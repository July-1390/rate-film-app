import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// import { defaultFilms } from "../data";
import { loadFilm } from "../apiServices";
import "./FilmPage.css";

const FilmPage = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    loadFilm(id).then((film) => {
      setFilm(film);
    });
  }, [id]);

  return (
    <div>
      <Link to="/" className="btn--back">
        <span>Back</span>
      </Link>
      {film ? (
        <div className="film-page-container">
          <div className="page-film-poster-wrapper">
            <img
              className="page-film-poster"
              src={film.poster_url}
              alt="film poster"
            />
          </div>
          <div className="page-film-content">
            <h2 className="page-film-title">{film.title}</h2>
            <h3>
              {film.title_ru}, {film.release_year}
            </h3>
            <p className="page-film-country">
              {film.country}, {film.genre}
            </p>
            <p className="film-page-description">{film.description}</p>

            <div>
              <p>Actors:</p>
              <div className="">
                {film.actors.map((actor) => (
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
