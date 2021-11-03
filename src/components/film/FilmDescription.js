import React from "react";
import { Link } from "react-router-dom";
import "./CardFilm.scss";

const FilmDescription = ({ film }) => {
  return (
    <>
      <div className="cards-film-description">
        <Link to={`/films/${film.id}`}>
          <h2 className="cards-film-title">{film.title}</h2>
        </Link>
        <p className="cards-film-translate-name">
          {film.title_ru}, {film.release_year}
        </p>
        <p className="cards-film-country">
          {film.country}, {film.genre}
        </p>
        <p className="cards-film-director">
          Directed by {""}
          <span className="director">{film.director}</span>
        </p>
      </div>
    </>
  );
};

export default FilmDescription;
