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

export const loadFilm = async (id: string) => {
  const url = `http://rfilm.mswan.ru/api/v1/films/${id}`;
  const response = await fetch(url);
  const film = await response.json();
  return film;
};
