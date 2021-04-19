const loadFilms = async () => {
  const url = `http://rfilm.mswan.ru/api/v1/films`;
  const response = await fetch(url);
  const films = await response.json();
  return films;
};

export default loadFilms;
