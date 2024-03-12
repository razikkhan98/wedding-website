import React from "react";

// Image
import Divider from "../../asset/images/icon-divider.png";
import Registry from "../../asset/images/slider-img-registry.jpg";
import Interior from "../../asset/images/slider-img-interior.jpg";
import Car from "../../asset/images/slider-img-car.jpg";
import Ring from "../../asset/images/slider-img-ring.jpg";
import Photo from "../../asset/images/slider-img-photo.jpg";
import Anniversay from "../../asset/images/slider-img-anniversay.jpg";
import Heading from "../../common/heading";

function Services() {
  const ServicesImgfirst = [
    {
      title: "Wedding Registry",
      description:
        "There are many variations of the read passages available but the majority.",
      img: Registry,
    },
    {
      title: "Interior Decoration",
      description:
        "There are many variations of the read passages available but the majority.",
      img: Interior,
    },
    {
      title: "Wedding Car",
      description:
        "There are many variations of the read passages available but the majority.",
      img: Car,
    },
  ];

  const ServicesImgsecond = [
    {
      title1: "Wedding Ring",
      description1:
        "There are many variations of the read passages available but the majority.",
      img1: Ring,
    },
    {
      title1: "Video & Photograpy",
      description1:
        "There are many variations of the read passages available but the majority.",
      img1: Photo,
    },
    {
      title1: "Anniversay Program",
      description1:
        "There are many variations of the read passages available but the majority.",
      img1: Anniversay,
    },
  ];

  return (
    <>
      {/* <!--  Service-area start --> */}

      <div class="service-area bg position-relative py-120">
        <div class="container">
          <Heading title='Our Service' heading1='Our Awesome' heading2='Service'/>
          
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card-wrapper">
                  {ServicesImgfirst.map((link, index) => (
                    <>
                      <div class="service-item service-item-img">
                        <div class="service-img">
                          <img src={link.img} alt="Loading" />
                        </div>
                        <div class="service-icon position-relative d-flex justify-content-center align-items-center">
                          <i class="fa-solid fa-car"></i>
                        </div>
                        <div class="service-content position-relative">
                          <h3 class="service-title">
                            <div>{link.title}</div>
                          </h3>
                          <p class="service-text">{link.description}</p>
                          <div class="service-arrow">
                            <a href="#" class="service-btn">
                              Read More
                              <i class="fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              <div class="carousel-item">
                <div class="card-wrapper">
                {ServicesImgsecond.map((link, index) => (
                    <>
                      <div class="service-item service-item-img">
                        <div class="service-img">
                          <img src={link.img1} alt="Loading" />
                        </div>
                        <div class="service-icon position-relative d-flex justify-content-center align-items-center">
                          <i class="fa-solid fa-car"></i>
                        </div>
                        <div class="service-content position-relative">
                          <h3 class="service-title">
                            <div>{link.title1}</div>
                          </h3>
                          <p class="service-text">{link.description1}</p>
                          <div class="service-arrow">
                            <a href="#" class="service-btn">
                              Read More
                              <i class="fa-solid fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Service-area End --> */}
    </>
  );
}

export default Services;
