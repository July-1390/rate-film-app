import React from "react";
import { Link } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";
import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/list-of-film" className="navbar-logo">
            <GiFilmSpool className="navbar-icon" />
            <h4 className="nav-title">
              Rate<span className="highlight">Film</span>
            </h4>
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/list-of-film" className="btn-link">
                <Button buttonStyle="btn--primary">List Of Films</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Header;
