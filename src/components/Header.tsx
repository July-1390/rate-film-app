import { Link } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";
import Button from "./Button";
import "./Header.scss";

const Header = ({
  setIsModalVisible,
  setIsSignUpWindowVisible,
}: {
  setIsModalVisible: (val: boolean) => void;
  setIsSignUpWindowVisible: (val: boolean) => void;
}) => {
  const handleShow = () => setIsModalVisible(true);
  const handleShowSignUpWindow = () => setIsSignUpWindowVisible(true);

  return (
    <>
      <div className="background-line">
        <div className="main-container">
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
                    <Button className="btn-primary">List Of Films</Button>
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-color"
                    onClick={handleShowSignUpWindow}
                  >
                    Sign Up
                  </button>
                </li>
                <li>
                  <button className="btn btn-color" onClick={handleShow}>
                    Log In
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
};
export default Header;
