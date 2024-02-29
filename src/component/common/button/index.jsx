import React from "react";

const Button = ({link , style , title}) => {
  return (
    <>
      <a href={link} class={style}>
        {title}
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      {/* <a href="#" class="theme-btn">
        About More
        <i class="fa-solid fa-arrow-right"></i>
      </a> */}
    </>
  );
};

export default Button;
