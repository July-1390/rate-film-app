import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

import { getFilm } from "../apiServices";
import { Film } from "../interfaces/film";
import "./FilmPage.css";

const FilmPage = () => {
  const { id }: { id: any } = useParams();

  const { isLoading, data } = useQuery<Film>("film", () => getFilm(id));

  return (
    <div>
      <Link to="/" className="btn--back">
        <span>Back</span>
      </Link>
      {!isLoading && data ? (
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
