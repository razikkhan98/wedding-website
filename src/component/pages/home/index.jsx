import React from "react";
import Button from "../../common/button";

const Home = () => {
  return (
    <>
      {/* <!--  Slider start --> */}
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="hero-section d-flex align-items-center">
            <div class="carousel-item active">
              <div
                class="hero-single hero-single-img1"
              ></div>
            </div>

            <div class="carousel-item">
              <div
                class="hero-single hero-single-img2"
              ></div>
            </div>

            <div class="carousel-item">
              <div
                class="hero-single hero-single-img3"
              ></div>
            </div>

            <div class="container">
              <div class="row align-items-center">
                <div class="col-md-9 col-lg-9 mx-auto">
                  <div class="hero-content position-relative d-flex flex-column justify-content-center text-center">
                    <h6 class="hero-sub-title position-relative">
                      WE ARE SKILLED & EXPERT
                    </h6>
                    <h4 class="hero-title">
                      Wedding & Event Planner For <span>Colourful</span>
                      Couples
                    </h4>
                    <p
                      data-animation="fadeInUp"
                      data-delay=".75s"
                      class="animated fadeInUp"
                      // style={{animation-delay: "0.75s"}}
                    >
                      There are many variations of passages orem psum available
                      but the majority have suffered alteration in some form by
                      injected humour or randomised.
                    </p>

                    <div class="hero-btn d-flex justify-content-center">
                      <Button title='About More' href='#' style='theme-btn'/>
                      <Button title='Learn More' href='#' style='theme-btn theme-btn2'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="carousel-nav">
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div> */}

      {/* <!--  Slider End --> */}
    </>
  );
};

export default Home;
