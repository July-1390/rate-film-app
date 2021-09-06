import React from "react";
import { Link } from "react-router-dom";
import {RiStarSFill} from 'react-icons/ri'

import "./UserProfile.scss";

const UserProfile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-header-section">
            <h1 className='title'>User Profile Page</h1>
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
            <div className='nav-user-profile'>
              <ul className='navigation'>
                  <li className='first'>
                    <Link className="profile-links" to="/">
                      Movie Ratings
                    </Link>
                  </li>
                  <li className='second'>
                    <Link className="profile-links" to="/">
                      Profile
                    </Link>
                  </li>
                  <li className='third'>
                    <Link className="profile-links" to="/">
                      Manage account
                    </Link>
                  </li>
              </ul>
            </div>
                <div className="panel-list-films">
                    <div className="one-film">
                      
                        <div className="rating-poster">
                          <img
                            alt="poster"
                            src="https://resizing.flixster.com/5avIoBUmkdWfFcA8QOn0VM8BI28=/170x243/v2/https://resizing.flixster.com/xQQsLC7IJypTxyRXeOvnPwdEWwE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzE0ZWFjM2Y1LTYzNTYtNGIwNS1iNGU2LTk0NTA2MGQ3NjY3NC53ZWJw"
                          />
                        </div>
                          <div className='name-of-film'>
                            <p className='rating-movie-title'>Drive</p>
                          </div>
                          <div className='rating-stars'>
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                          </div>
                        
                    </div>
                </div>
              
          </div>
        
      </div>
    </>
  );
};

export default UserProfile;
