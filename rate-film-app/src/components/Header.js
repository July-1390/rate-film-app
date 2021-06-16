import React from "react";
import { Link } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";
import Button from "./Button";
import "./Header.css";

const Header = ({ setIsModalVisible, setIsSignUpWindowVisible }) => {
  const handleShow = () => setIsModalVisible(true);

  const handleShowSignUpWindow = () => setIsSignUpWindowVisible(true);

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
                <Button className="btn--primary">List Of Films</Button>
              </Link>
            </li>
            <li>
              <button className="btn--primary" onClick={handleShowSignUpWindow}>
                Sign Up
              </button>
            </li>
            <li>
              <button className="btn--primary" onClick={handleShow}>
                Log In
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
