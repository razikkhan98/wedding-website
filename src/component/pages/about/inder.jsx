import React from "react";
import AboutImg from "../../asset/images/about-img (2).jpg";
import Button from "../../common/button";

const About = () => {
  return (
    <>
      {/* <!--  About-area start --> */}

      <div class="about-area position-relative d-block mb-4 py-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="about-left position-relative">
                <div class="about-img">
                  <img src={AboutImg} alt="Loading" />
                </div>
                <div class="about-experience">
                  <h1>
                    25 <span>+</span>
                  </h1>
                  <span class="about-experience-text">Years Of Experience</span>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="about-right position-relative d-block">
                <div class="site-content mb-3">
                  <span class="site-title">About Us</span>
                  <h2 class="site-heading">
                    We Make Your Every <span>Moment</span> Special
                  </h2>
                </div>
                <p class="about-text">
                  There are many variations of passages orem psum available but
                  the majority have suffered alteration in some form by injected
                  humour or randomised
                </p>

                <ul class="about-list">
                  <li>
                    <div class="about-icon">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="about-list-text">
                      Take a look at our round up of the best shows
                    </div>
                  </li>
                  <li>
                    <div class="about-icon">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="about-list-text">
                      It has survived not only five centuries
                    </div>
                  </li>
                  <li>
                    <div class="about-icon">
                      <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="about-list-text">
                      Lorem Ipsum has been the ndustry standard dummy text
                    </div>
                  </li>
                </ul>

                <div class="about-bottom d-flex align-items-center">
                  <Button title="Read More" href="#" style="theme-btn" />
                  <div class="about-call d-flex align-items-center">
                    <div class="about-call-icon d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-phone"></i>
                    </div>

                    <div class="about-call-content">
                      <span>Call Us Anytime</span>
                      <h5 class="about-call-number">
                        <a href="tel:+2123654789">+2 123 654 789</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  About-area End --> */}
    </>
  );
};

export default About;
