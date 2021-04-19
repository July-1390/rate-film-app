import React, { useState } from "react";
import { Link } from "react-router-dom";
import { defaultFilms } from "../data";
import Votes from "./Votes";
import "./CardFilm.css";

const CardFilm = () => {
  const [films, setFilms] = useState(defaultFilms);

  return (
    <div className="cards-container">
      {films.map((film) => (
        <div>
          <Link className="link" to={`/films/${film.id}`}>
            <div className="card-film" key={film.id}>
              <div className="poster">
                <img
                  key={film.id}
                  src={film.src}
                  alt="poster film"
                  className="card-header-icon"
                />
              </div>
              <div className="content-film">
                <div className="film-description">
                  <h2 className="film-title">{film.filmTitle}</h2>
                  <p className="translate-film-name">
                    {film.translateFilmTitle}, {film.releaseYear}
                  </p>
                  <p className="country">
                    {film.country}, {film.filmGenre}
                  </p>
                  <p className="film-director">
                    Directed by {""}
                    <span className="director">{film.director}</span>
                  </p>
                </div>

                <div>
                  <p>Actors:</p>
                  <div className="image-wrapper">
                    {film.actors.slice(0, 4).map((actor) => (
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

              <div>
                <Votes />
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default CardFilm;
