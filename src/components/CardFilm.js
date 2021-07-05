import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Votes from "./Votes";
import Spinner from "../components/Spinner";
import { loadFilms } from "../apiServices";
import "./CardFilm.css";

// import { snakeToCamel } from "../helpers";

const CardFilm = ({ genres }) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    loadFilms(genres).then((films) => {
      setFilms(films);
// you can play with redux here -> in the <MySelect /> dispatch the genres to the store 
// -> fetch the movies there on change(or here if you want) with choosen genres(or/and anything else) -> then dispatch the result to the store ->
// -> here listen to the store -> and render the result(films)
      setIsLoading(false);
    });
  }, [genres]);

  return (
    <>
      {isLoading ? (
        <Spinner isVisible={isLoading} /> // nothing, but looks like it's always visible here -> <Spinner />
      ) : (
        <>
          <div className="cards-container">
            {films.map((film) => (
    // would be nice to create <CardFilm /> -> films.map((film) => <CardFilm film={film} />)
    // it will be easier to read + you can rename this component, CardList or smth like that

              <div>
                <Link className="link" to={`/films/${film.id}`}>
                  <div className="card-film" key={film.id}>
                    <div className="poster">
                      <img
                        key={film.id}
                        src={film.poster_url}
                        alt="poster film"
                        className="card-header-icon"
                      />
                    </div>
                    <div className="content-film">
                      <div className="film-description">
                        <h2 className="film-title">{film.title}</h2>
                        <p className="translate-film-name">
                          {film.title_ru}, {film.release_year}
                        </p>
                        <p className="country">
                          {film.country}, {film.genre}
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
                              src={actor.photo_url}
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
        </>
      )}
    </>
  );
};
export default CardFilm;
