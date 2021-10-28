import { Film } from "./interfaces/film";
import { User, UserCreateErrorResponse, AccessToken } from "./interfaces/user";
import { Rating } from "./interfaces/film";

const baseUrl = "https://rfilm.mswan.ru/api/v1";

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

export const loadFilms = async (
  genres: string[],
  token?: AccessToken
): Promise<ApiResponse<Film[]>> => {
  const searchParams = new URLSearchParams();

  for (const genre of genres) {
    searchParams.append("genre", genre);
  }

  const url = `${baseUrl}/films?${searchParams}`;
  let headers = {};

  if (token) {
    headers = { Authorization: `Bearer ${token.access_token}` };
  }

  const response = await fetch(url, { headers: headers });
  const films = (await response.json()) as Film[];

  return {
    statusCode: response.status,
    data: films,
  };
};

export const getFilm = async (id: string, token?: AccessToken): Promise<ApiResponse<Film>> => {
  const url = `${baseUrl}/films/${id}`;

  let headers = {};

  if (token) {
    headers = { Authorization: `Bearer ${token.access_token}` };
  }

  const response = await fetch(url, {
    headers: headers,
  });
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

  const url = `${baseUrl}/users`;

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

export const loginUser = async (
  username: string,
  password: string
): Promise<ApiResponse<AccessToken>> => {
  const url = `${baseUrl}/users/token`;

  let formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);

  const response = await fetch(url, {
    body: formData,
    method: "post",
  });

  const userToken = (await response.json()) as AccessToken;

  return {
    statusCode: response.status,
    data: userToken,
  };
};

export const getUser = async (
  token: AccessToken
): Promise<ApiResponse<User>> => {
  const url = `${baseUrl}/users/me`;
  // const headers = {'Authorization': `Bearer ${token.access_token}`}

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  const user = (await response.json()) as User;

  return {
    statusCode: response.status,
    data: user,
  };
};

export const changeDisplayName = async (
  displayName: string,
  token: AccessToken
): Promise<ApiResponse<User | UserCreateErrorResponse>> => {
  const body = {
    display_name: displayName,
  };

  const url = `${baseUrl}/users/me`;

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token.access_token}`,
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

export const rateFilm = async (
  filmId: number,
  score: number,
  token: AccessToken
): Promise<ApiResponse<Rating>> => {
  const url = `${baseUrl}/rating`;

  const body = {
    film_id: filmId,
    score: score,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
    body: JSON.stringify(body),
  });

  const rating = (await response.json()) as Rating;

  return {
    statusCode: response.status,
    data: rating,
  };
};
