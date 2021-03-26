import React, { useState } from "react";
import "./CardFilm.css";

const CardFilm = () => {
  const defaultFilms = [
    {
      id: 1,
      filmTitle: "Drive",
      translateFilmTitle: "Драйв",
      releaseYear: "2011",
      country: "USA",
      filmGenre: "Action/Crime",
      director: "Nicolas Winding Refn",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/91vya3UmldL._AC_SL1500_.jpg",
      actors: [
        {
          id: 5,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 8,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 15,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 22,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
      ],
    },
    {
      id: 2,
      filmTitle: "The Revenant",
      translateFilmTitle: "Выживший",
      releaseYear: "2015",
      country: "USA",
      filmGenre: "Action/Crime",
      director: "Edgar Wright",
      src:
        "https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0060_1024x1024.jpeg?v=1571444279",
      actors: [
        {
          id: 5,
          name: "Gosling",
          photo:
            "https://humornama.com/wp-content/uploads/2020/08/Leonardo-DiCaprio-laughing-meme-template-of-Django-Unchained-1024x1024.jpg",
        },
        {
          id: 8,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 15,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 22,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
      ],
    },
    {
      id: 3,
      filmTitle: "Drive",
      translateFilmTitle: "Драйв",
      releaseYear: "2011",
      country: "USA",
      filmGenre: "Action/Crime",
      director: "Nicolas Winding Refn",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/91vya3UmldL._AC_SL1500_.jpg",
      actors: [
        {
          id: 5,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 8,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 15,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 22,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
      ],
    },
    {
      id: 4,
      filmTitle: "The Revenant",
      translateFilmTitle: "Выживший",
      releaseYear: "2015",
      country: "USA",
      filmGenre: "Action/Crime",
      director: "Edgar Wright",
      src:
        "https://images-na.ssl-images-amazon.com/images/I/91vya3UmldL._AC_SL1500_.jpg",
      actors: [
        {
          id: 5,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 8,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 15,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
        {
          id: 22,
          name: "Gosling",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQzMjkwNTQ2OF5BMl5BanBnXkFtZTgwNTQ4MTQ4MTE@._V1_.jpg",
        },
      ],
    },
  ];

  const [films, setFilms] = useState(defaultFilms);

  return (
    <div className="card-container">
      {films.map((film) => (
        <div className="card-film">
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
                Directed by <span className="director">{film.director}</span>
              </p>
            </div>

            <div>
              <p>Actors:</p>
              <div className="image-wrapper">
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
      ))}
    </div>
  );
};
export default CardFilm;
