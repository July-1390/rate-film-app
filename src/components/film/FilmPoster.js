
import { Link } from "react-router-dom";
import Votes from "../Votes";
import "./CardFilm.scss";

const FilmPoster = ({ film }) => {
  return (
    <>      
        <div className="cards-film-poster">
          <Link to={`/films/${film.id}`}>
            <img key={film.id} src={film.poster_url} alt="poster film" />
          </Link>
          <Votes rating={film.rating} filmId={film.id} />
        </div>
    </>
  );
};

export default FilmPoster;
