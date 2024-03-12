import React from "react";

const Counter = () => {
  const CounterData = [
    {
      icon: "fa-solid fa-suitcase",
      number: 1200,
      title: "+ Projects Done ",
    },
    {
      icon: "fa-solid fa-archway",
      number: 500,
      title: "+ Happy Couples",
    },
    {
      icon: "fa-solid fa-user",
      number: 1500,
      title: "+ Experts Planner",
    },
    {
      icon: "fa-solid fa-location-dot",
      number: 50,
      title: "+ Wedding Locations",
    },
  ];
  return (
    <>
      {/* <!--  Counter-area Start --> */}

      <div class="counter-area position-relative pt-120">
        <div class="container">
          <div class="counter-wrapper bg">
            <div class="row">
              {CounterData.map((link, index) => (
                <>
                  <div class="col-lg-3 col-sm-6">
                    <div class="counter-box position-relative d-flex align-items-center flex-column text-center">
                      <div class="icon">
                        <i class={link.icon}></i>
                      </div>
                      <div>
                        <span
                          class="counter"
                          data-count="+"
                          data-to="1200"
                          data-speed="3000"
                        >
                          {link.number}
                        </span>
                        <h6 class="title">{link.title}</h6>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!--  Counter-area End --> */}
    </>
  );
};

export default Counter;
