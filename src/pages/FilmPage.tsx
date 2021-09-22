import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";

import { getFilm, ApiResponse } from "../apiServices";
import { Film } from "../interfaces/film";
import Button from "../components/buttons/Button";
import "./FilmPage.scss";

const FilmPage = () => {
  const { id }: { id: any } = useParams();

  const { isLoading, data } = useQuery<ApiResponse<Film>>("film", () =>
    getFilm(id)
  );

  return (
    <div>
      <Link to="/">
        <Button className="btn-back">Back</Button>
      </Link>
      {!isLoading && data ? (
        <div className="film-page-container">
          <div className="film-page-poster-wrapper">
            <img
              className="film-page-poster"
              src={data.data.poster_url}
              alt="film poster"
            />
          </div>
          <div className="film-page-content">
            <h2 className="film-page-title">{data.data.title}</h2>
            <h3>
              {data.data.title_ru}, {data.data.release_year}
            </h3>
            <p className="film-page-country">
              {data.data.country}, {data.data.genre}
            </p>
            <p className="film-page-description">{data.data.description}</p>

            <div>
              <p>Actors:</p>
              <div className="film-page-image-wrapper">
                {data.data.actors.map((actor) => (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default FilmPage;
