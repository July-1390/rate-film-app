import { useContext } from "react";
import { AuthTokenContext } from "../../App"
import { removeAuthToken } from "../../localStorageUserServices";
import { Link } from "react-router-dom";
import { RiArrowDropDownFill } from "react-icons/ri";
import { User } from "../../interfaces/user";
import "./ThumbMenuProfile.scss";

const ThumbMenuProfile = (
  { user }: { user: User },
) => {
  const { setAuthToken } = useContext(AuthTokenContext);

  const handleLogOut = (e: any) => {
    e.preventDefault();
    removeAuthToken();
    setAuthToken("")
  };

  return (
    <>
      <div className="wrapper-thumb-menu">
        <img
          className="thumb-avatar"
          alt="user-avatar"
          src="https://images.fandango.com/cms/assets/a2f0b9d0-cf84-11eb-a507-3be98bb99253--actordefaulttmb.gif"
        />
        <span className="thumb-menu-username">{user.username}</span>
        <p className="dropdown-arrow">
          <RiArrowDropDownFill />
        </p>
      </div>
      <ul className="list-dropdown-items">
        <li className="dropdown-item">
          <Link className="dropdown-link" to="/profile">
            Profile
          </Link>
        </li>
        <li className="dropdown-item">
          <button className="dropdown-link" onClick={handleLogOut}>
            Log out
          </button>
        </li>
      </ul>
    </>
  );
};

export default ThumbMenuProfile;
