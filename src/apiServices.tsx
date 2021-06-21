import { Film } from "./interfaces/film";

export const loadFilms = async (genres: string[]) => {
  const searchParams = new URLSearchParams();

  for (const genre of genres) {
    searchParams.append("genre", genre);
  }

  const url = "http://rfilm.mswan.ru/api/v1/films?" + searchParams;

  const response = await fetch(url);
  const films = await response.json();
  return films;
};

export const getFilm = async (id: string): Promise<Film> => {
  const url = `http://rfilm.mswan.ru/api/v1/films/${id}`;
  return fetch(url).then((res) => res.json());
};

export const loadFilm = async (id: string) => {
  const url = `http://rfilm.mswan.ru/api/v1/films/${id}`;
  const response = await fetch(url);
  const film = await response.json();
  return film;
};

export const createUser = async (
  username: string,
  email: string,
  password: string
) => {
  const body = {
    username: username,
    email: email,
    password: password,
  };
  const url = `http://rfilm.mswan.ru/api/v1/users`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const user = await response.json();
  return user;
};
