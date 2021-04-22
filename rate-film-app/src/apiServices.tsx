export const loadFilms = async () => {
  const url = `http://rfilm.mswan.ru/api/v1/films`;
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
