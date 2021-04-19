import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { defaultFilms } from "../data";
import "./FilmPage.css";

const FilmPage = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const film = defaultFilms.filter((f) => f.id.toString() === id)[0];
    setFilm(film);
    console.log(film);
  }, [id]);

  return (
    <div>
      {film ? (
        <div className="film-page-container">
          <div className="page-film-poster-wrapper">
            <img
              className="page-film-poster"
              src={film.src}
              alt="film poster"
            />
          </div>
          <div className="page-film-content">
            <h2 className="page-film-title">{film.filmTitle}</h2>
            <h3>
              {film.translateFilmTitle}, {film.releaseYear}
            </h3>
            <p className="page-film-country">
              {film.country}, {film.filmGenre}
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
                    src={actor.photo}
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
