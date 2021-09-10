import React, { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import AccountSettings from "../components/AccountSettings";

import "./UserProfile.scss";

const UserProfile = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="profile-container">
        <div className="profile-header-section">
          <h1 className="title">User Profile Page</h1>
        </div>
        <div className="left-column">
          <div className="avatar-widget">
            <img
              alt="user-avatar"
              src="https://images.fandango.com/cms/assets/a2f0b9d0-cf84-11eb-a507-3be98bb99253--actordefaulttmb.gif"
            />
          </div>
          <h2 className="user-name">User Names</h2>
        </div>

        <div className="right-column">
          <div className="nav-user-profile">
            <div className="navigation">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Movie Ratings
              </button>

              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Profile
              </button>

              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Manage account
              </button>
            </div>
          </div>
          <div className="content-tabs">
            <div
              className={
                toggleState === 1
                  ? "content-film  active-content"
                  : "content-film"
              }
            >
              <h2>Content 1</h2>
              <p>Lorem ipsum dolor sit amet, consectet</p>

              <div className="one-film">
                <div className="rating-poster">
                  <img
                    alt="poster"
                    src="https://resizing.flixster.com/5avIoBUmkdWfFcA8QOn0VM8BI28=/170x243/v2/https://resizing.flixster.com/xQQsLC7IJypTxyRXeOvnPwdEWwE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzE0ZWFjM2Y1LTYzNTYtNGIwNS1iNGU2LTk0NTA2MGQ3NjY3NC53ZWJw"
                  />
                </div>
                <div className="name-of-film">
                  <p className="rating-movie-title">Drive</p>
                  <p className="translate-name">Драйв, 2011</p>
                  <p className="genre-of-the-film">USA, Action/Crime</p>
                </div>
                <div className="rating-stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "content-film  active-content"
                  : "content-film"
              }
            >
              <h2>Content 2</h2>
              <p>Lorem ipsum dolor sit amet, consectet</p>
              <div className="one-film">
                <div className="rating-poster">
                  <img
                    alt="poster"
                    src="https://resizing.flixster.com/5avIoBUmkdWfFcA8QOn0VM8BI28=/170x243/v2/https://resizing.flixster.com/xQQsLC7IJypTxyRXeOvnPwdEWwE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzE0ZWFjM2Y1LTYzNTYtNGIwNS1iNGU2LTk0NTA2MGQ3NjY3NC53ZWJw"
                  />
                </div>
                <div className="name-of-film">
                  <p className="rating-movie-title">Drive</p>
                  <p className="translate-name">Драйв, 2011</p>
                  <p className="genre-of-the-film">USA, Action/Crime</p>
                </div>
                <div className="rating-stars">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 3
                  ? "content-film  active-content"
                  : "content-film"
              }
            >
              <h2>Content 3</h2>
              <p>Lorem ipsum dolor sit amet, consectet</p>
              <AccountSettings />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
