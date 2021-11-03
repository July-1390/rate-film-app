import React, { useState, useEffect } from "react";
import FilmPoster from "./FilmPoster";
import Spinner from "../Spinner";
import { loadFilms } from "../../apiServices/film";
import { getUserToken } from "../../localStorageUserServices";
import FilmDescription from "./FilmDescription";
import FilmActors from "./FilmActors";
import "./CardFilm.scss";

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
                  <FilmPoster film={film} />
                  <div className="cards-film-content" key={film.title}>
                    <FilmDescription film={film} />
                    <div>
                      <FilmActors film={film} />
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
