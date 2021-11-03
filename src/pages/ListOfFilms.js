import { useState } from "react";
import CardFilm from "../components/film/CardFilm";
import Select from "../components/Select";

const ListOfFilms = () => {
  const [genres, setGenres] = useState([]);

  return (
    <>
      <Select setSelectedGenres={setGenres} />
      <CardFilm genres={genres} />
    </>
  );
};
export default ListOfFilms;
