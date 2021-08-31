import React from "react";
import { Link } from "react-router-dom";

import "./UserProfile.scss";

const UserProfile = () => {
  return (
    <>
      <div className="wrapper">
        <div className="profile-header-section">
            <h1>User Profile Page</h1>
        </div>
        <div className="row">
          <div className="left-column">
            <div className="panel-widget">
                <div className="text-center">
                  <img
                    alt="user-avatar"
                    src="https://images.fandango.com/cms/assets/a2f0b9d0-cf84-11eb-a507-3be98bb99253--actordefaulttmb.gif"
                  />
                </div>
                <h2 className="user-name">User Names</h2>
            </div>
          </div>

          <div className="right-column">
            <div className='nav-user-profile'>
              <ul>
                  <li>
                    <Link className="profile-links" to="/">
                      Movie Ratings
                    </Link>
                  </li>
                  <li>
                    <Link className="profile-links" to="/">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="profile-links" to="/">
                      Manage account
                    </Link>
                  </li>
              </ul>
              <div className="pd-20">
                <div className="panel-body">
                  <ul>
                    <li className="rating-user-review">
                      <section className="user-rating">
                        <div className="rating-poster">
                          <img
                            alt="poster"
                            src="https://resizing.flixster.com/5avIoBUmkdWfFcA8QOn0VM8BI28=/170x243/v2/https://resizing.flixster.com/xQQsLC7IJypTxyRXeOvnPwdEWwE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzE0ZWFjM2Y1LTYzNTYtNGIwNS1iNGU2LTk0NTA2MGQ3NjY3NC53ZWJw"
                          />
                        </div>
                      </section>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
