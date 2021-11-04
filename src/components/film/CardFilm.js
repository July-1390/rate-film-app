import { useState, useEffect, useContext } from "react";
import { AuthTokenContext } from "../../App";
import FilmPoster from "./FilmPoster";
import Spinner from "../Spinner";
import { loadFilms } from "../../apiServices/film";
import FilmDescription from "./FilmDescription";
import FilmActors from "./FilmActors";
import "./CardFilm.scss";

const CardFilm = ({ genres }) => {
  const { authToken } = useContext(AuthTokenContext);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    loadFilms(genres, authToken).then((response) => {
      setFilms(response.data);
      setIsLoading(false);
    });
  }, [genres, authToken]);

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
                  <div className="cards-film-content">
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
