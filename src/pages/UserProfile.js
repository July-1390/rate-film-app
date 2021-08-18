import React from "react";
import { Link } from "react-router-dom";

import "./UserProfile.scss";

const UserProfile = () => {
  return (
    <>
      <div className="main-container">
        <div className="profile-header-section">
          <div className="profile-title-section-header">
            <h1>User Profile Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="left-column">
            <div className="panel-widget">
              <div className="panel-body">
                <div className="text-center info-parent">
                  <img
                    alt="user-avatar"
                    src="https://images.fandango.com/cms/assets/a2f0b9d0-cf84-11eb-a507-3be98bb99253--actordefaulttmb.gif"
                  />
                </div>
                <h2 className="user-name">User Name</h2>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div>
              <nav className="profile-tab-menu">
                <ul className="nav-user-profile">
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
              </nav>
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
        {/* <div className="col-left">
          <section className="panel">
            <div className="panel-body">
              <div className="col-xs-9">
                <a href="/profile">
                  <img
                    src="https://images.fandango.com/cms/assets/a2f0b9d0-cf84-11eb-a507-3be98bb99253--actordefaulttmb.gif"
                    width="100"
                    alt="user"
                  />
                </a>
              </div>
              <div className="col-xs-15">
                <h1 className="profile-name">Tom West</h1>
              </div>
            </div>
          </section>
        </div>
        <div className="col-right">
          <section className="panel">
            <h2 className="panel-heading">rating history</h2>
          </section>
        </div> */}
      </div>
    </>
  );
};

export default UserProfile;
