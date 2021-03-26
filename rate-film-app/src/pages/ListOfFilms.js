import React from "react";
import CardFilm from "../components/CardFilm";

import MySelect from "../components/MySelect";

const ListOfFilms = () => {
  return (
    <div className="container">
      <MySelect />
      <CardFilm />
    </div>
  );
};
export default ListOfFilms;
