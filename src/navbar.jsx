import React, { useState } from "react";
import { useHistory } from "react-router";
import photo from "./images/my-photo.png";
import "./navbar.css";

let Navbar = (props) => {
  let [active, setActive] = useState(false);

  function toggle() {
    if (active === false) {
      setActive({ active: true });
    }
    if (active === true) {
      setActive({ active: false });
    }
  }

  let history = useHistory();

  return (
    <div className="main-div">
      {active ? (
        <div className="sidebar">
          <div className="content">
            <div className="logo">
              <i class="bx bxl-adobe"></i>
              <div className="logo-name">My Portfolio</div>
              <div className="img-tag">
                <img src={photo} alt="my-photo" />
              </div>
            </div>
            <i
              onClick={() => {
                {
                  toggle(setActive(false));
                  props.conditionSetter(false);
                }
              }}
              class="bx bx-arrow-back"
              id="btn"
            ></i>
          </div>
          <ul className="navlist">
            <li>
              <a
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <i class="bx bx-home"></i>
                <span className="link-name">Home</span>
              </a>
              <span className="tooltip">Home</span>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scroll(0, 1350);
                }}
              >
                <i class="bx bx-book"></i>
                <span className="link-name">Education</span>
              </a>
              <span className="tooltip">Education</span>
            </li>

            <li>
              <a
                onClick={() => {
                  window.scroll(0, 2650);
                }}
              >
                <i class="bx bxl-stripe"></i>
                <span className="link-name">Skills</span>
              </a>
              <span className="tooltip">Skills</span>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scroll(0, 3750);
                }}
              >
                <i className="bx bx-laptop"></i>
                <span className="link-name">Projects</span>
              </a>
              <span className="tooltip">Projects</span>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scroll(0, 4550);
                }}
              >
                <i class="bx bxs-contact"></i>
                <span className="link-name">Contact</span>
              </a>
              <span className="tooltip">Contacts</span>
            </li>
          </ul>

          <div className="profile-content">
            <div className="profile">
              <div className="profile-details">
                <div className="name-job">
                  <div className="name">Ankur Jindal</div>
                  <div className="job">Web Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="collpase-sidebar">
          <div className="menu">
            <i
              onClick={() => {
                {
                  toggle(setActive(true));
                  props.conditionSetter(true);
                }
              }}
              class="bx bx-menu"
            ></i>
          </div>
          <ul className="nav-list">
            <li>
              <a
                onClick={() => {
                  history.push("/");
                  window.scroll(0, 0);
                }}
              >
                <i class="bx bx-home"></i>
              </a>
              <span className="tooltips">Home</span>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scroll(0, 1350);
                }}
              >
                <i class="bx bx-book"></i>
              </a>
              <span className="tooltips">Education</span>
            </li>

            <li>
              <a
                onClick={() => {
                  window.scroll(0, 2650);
                }}
              >
                <i class="bx bxl-stripe"></i>
              </a>
              <span className="tooltips">Skills</span>
            </li>
            <li>
              <a
                onClick={() => {
                  window.scroll(0, 3750);
                }}
              >
                <i className="bx bx-laptop"></i>
              </a>
              <span className="tooltips">Projects</span>
            </li>

            <li>
              <a
                onClick={() => {
                  window.scroll(0, 4750);
                }}
              >
                <i class="bx bxs-contact"></i>
              </a>
              <span className="tooltips">Contacts</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
