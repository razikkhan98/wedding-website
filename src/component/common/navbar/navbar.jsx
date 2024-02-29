import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <!--  Navigation Start --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="navbar-brand" href="#">
              Hidden brand
            </a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  PAGES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SERVICES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SHOP
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SOCIAL MEDIA
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>

            {/* <!-- <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> --> */}
          </div>
        </div>
      </nav>

      {/* <!-- Navigation End --> */}
    </>
  );
};


export default Navbar;