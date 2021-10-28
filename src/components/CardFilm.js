import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Votes from "./Votes";
import Spinner from "../components/Spinner";
import { loadFilms } from "../apiServices";
import { getUserToken } from "../localStorageUserServices";
import "./CardFilm.scss";

// import { snakeToCamel } from "../helpers";

const CardFilm = ({ genres }) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const token = getUserToken();
    loadFilms(genres, token).then((response) => {
      setFilms(response.data);
      setIsLoading(false);
    });
  }, [genres]);

  return (
    <>
      {isLoading ? (
        <Spinner isVisible={isLoading} />
      ) : (
        <>
          <div className="cards-film-container">
            {films.map((film) => (
              <>
                <div className="cards-film" key={film.id}>
                  <div className="cards-film-poster">
                    <Link to={`/films/${film.id}`}>
                      <img
                        key={film.id}
                        src={film.poster_url}
                        alt="poster film"
                      />
                    </Link>

                    <Votes rating={film.rating} filmId={film.id} />
                  </div>
                  <div className="cards-film-content" key={film.title}>
                    <div className="cards-film-description">
                      <h2 className="cards-film-title">{film.title}</h2>
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

                    <div>
                      <p className="cards-film-name-title">Actors:</p>
                      <div className="cards-film-image-wrapper">
                        {film.actors.slice(0, 4).map((actor) => (
                          <img
                            key={actor.id}
                            className="img-actors"
                            alt="actors"
                            src={actor.photo_url}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default CardFilm;
