import { Link } from "react-router-dom";
import { GiFilmSpool } from "react-icons/gi";
import Button from "./Button";
import "./Header.css";

interface IHeaderProps {
  setIsModalVisible: (val: boolean) => void;
  setIsSignUpWindowVisible: (val: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ // OR const Header = ({...}: IHeaderProps)
  setIsModalVisible,
  setIsSignUpWindowVisible,
}) => {
  const handleShow = React.useCallback(() => setIsModalVisible(true), []); 
  const handleShowSignUpWindow = React.useCallback(() => () => setIsSignUpWindowVisible(true), []);
// OR you can play with redux here: dispatch(action) -> change the store -> <App /> listens to the store -> modal window will pop up 
  return (
    <>
      <div className="background-line">
        <div className="container">
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
