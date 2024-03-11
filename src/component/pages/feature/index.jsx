import React from "react";

const FeatureArea = () => {
  const FeatureData = [
    {
      title: "Satisfaction Guarantee",
      description:
        "It is a long established fact that a reader will be distracted",
      icon: "fa-solid fa-heart-circle-check",
    },
    {
      title: "Expert Planners",
      description:
        "It is a long established fact that a reader will be distracted",
      icon: "fa-solid fa-person",
    },
    {
      title: "Made With Love",
      description:
        "It is a long established fact that a reader will be distracted",
      icon: "fa-solid fa-heart-pulse",
    },
    {
      title: "Affordable Pricing",
      description:
        "It is a long established fact that a reader will be distracted",
      icon: "fa-solid fa-champagne-glasses",
    },
  ];

  return (
    <>
      {/* <!--  Feature-area start --> */}
      <div class="feature-area position-relative py-120">
        <div class="container">
          <div class="row ">
            {FeatureData.map((link, index) => (
              <>
                <div class="col-md-6 col-lg-3">
                  <div class="feature-item position-relative text-center">
                    <div class="icons">
                      <i class={link.icon}></i>
                    </div>
                    <h4 class="feature-title">{link.title}</h4>
                    <p>
                      {link.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* <!--  Feature-area End --> */}
    </>
  );
};

export default FeatureArea;
