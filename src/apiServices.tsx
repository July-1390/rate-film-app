import { Film } from "./interfaces/film";
import { User, UserCreateErrorResponse } from "./interfaces/user";

const baseUrl = "https://rfilm.mswan.ru/api/v1";

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

export const loadFilms = async (
  genres: string[]
): Promise<ApiResponse<Film[]>> => {
  const searchParams = new URLSearchParams();

  for (const genre of genres) {
    searchParams.append("genre", genre);
  }

  const url = `${baseUrl}/films/?${searchParams}`;

  const response = await fetch(url);
  const films = (await response.json()) as Film[];

  return {
    statusCode: response.status,
    data: films,
  };
};

export const getFilm = async (id: string): Promise<ApiResponse<Film>> => {
  const url = `${baseUrl}/films/${id}`;

  const response = await fetch(url);
  const film = (await response.json()) as Film;

  return {
    statusCode: response.status,
    data: film,
  };
};

export const createUser = async (
  username: string,
  email: string,
  password: string
): Promise<ApiResponse<User | UserCreateErrorResponse>> => {
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

  const userOrError = await response.json();

  return {
    statusCode: response.status,
    data: userOrError,
  };
};
