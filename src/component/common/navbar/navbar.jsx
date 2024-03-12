import React from "react";
import Feedback from "../Modal/Feedback";
import logo from "../../asset/images/wedding_website_colour_themeandlogo.png";

const Navbar = () => {
  return (
    <>
      {/* <!--  Navigation Start --> */}
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-logo" href="#">
            <img src={logo} alt="Loading" />
            </a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Packages
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="theme-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Launch demo modal
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Feedback/>

      {/* <!-- Navigation End --> */}
    </>
  );
};

export default Navbar;
