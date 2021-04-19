import React from "react";
import { Link } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";
import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header-container ">
        <div className="logo">
          <Link to="/" className="navbar-logo">
            <GiFilmSpool className="navbar-icon" />
            <h4 className="nav-title">
              Rate<span className="highlight">Film</span>
            </h4>
          </Link>
        </div>

        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="btn-link">
                <Button buttonStyle="btn--primary">List Of Films</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
