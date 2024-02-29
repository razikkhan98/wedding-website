import React from "react";
// Image
import Divider from "../../asset/images/icon-divider.png";

const Heading = ({ title, heading1, heading2 }) => {
  return (
    <>
      <div class="site-content position-relative text-center">
        <span class="site-title">{title}</span>
        <h2 class="site-heading">
          {heading1} <span>{heading2}</span>
        </h2>
        <div class="header-img-divider">
          <img src={Divider} alt="Loading" />
        </div>
      </div>
    </>
  );
};

export default Heading;
