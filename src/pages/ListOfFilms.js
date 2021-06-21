import React, { useState } from "react";
import CardFilm from "../components/CardFilm";

import MySelect from "../components/MySelect";

const ListOfFilms = () => {
  const [genres, setGenres] = useState([]);

  return (
    <>
      <MySelect setSelectedGenres={setGenres} />
      <CardFilm genres={genres} />
    </>
  );
};
export default ListOfFilms;
