import React from "react";
import "./CardFilm.scss";

const FilmActors = ({film}) => {
  return (
    <>
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
    </>
  );
};

export default FilmActors;
