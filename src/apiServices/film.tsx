import { Film, Rating } from "../interfaces/film";
import { ApiResponse } from "../interfaces/response";
import { AccessToken } from "../interfaces/user";
import { baseUrl } from "./general";


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
