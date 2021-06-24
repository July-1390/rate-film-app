import { Film } from "./interfaces/film";
import { User, UserCreateErrorResponse } from "./interfaces/user";

const baseUrl = "https://rfilm.mswan.ru/api/v1";

export const loadFilms = async (genres: string[]) => {
  const searchParams = new URLSearchParams();

  for (const genre of genres) {
    searchParams.append("genre", genre);
  }

  const url = `${baseUrl}/films/?${searchParams}`;

  const response = await fetch(url);
  const films = await response.json();
  return films;
};

export const getFilm = async (id: string): Promise<Film> => {
  const url = `${baseUrl}/films/${id}`;
  return fetch(url).then((res) => res.json());
};

export const createUser = async (
  username: string,
  email: string,
  password: string
): Promise<User | UserCreateErrorResponse> => {
  const body = {
    username: username,
    email: email,
    password: password,
  };
  const url = `${baseUrl}/users/`;
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
