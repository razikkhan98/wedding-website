import React from "react";
import Divider from "../../asset/images/icon-divider.png";
import Border from "../../asset/images/border-2.png";
import Button from "../../common/button";
import Heading from "../../common/heading";

const Pricingplan = () => {
  const Pricingplan = [
    {
        icon:'fa-solid fa-leaf',
      title: "Basic",
      price: "$59.66",
      li1: "Full Body Polish",
      li2: "Stylish Makeup For Bride",
      li3: "Top Label Arrengement",
      li4: "Manicure And Pedicure",
      li5: "Portal Highlight",
    },
    {
        icon:'fa-solid fa-globe',
      title: "Standard",
      price: "$120.78",
      li1: "Full Body Polish",
      li2: "Stylish Makeup For Bride",
      li3: "Top Label Arrengement",
      li4: "Manicure And Pedicure",
      li5: "Portal Highlight",
    },
    {
        icon:'fa-solid fa-dove',
      title: "Premium",
      price: "$150.96",
      li1: "Full Body Polish",
      li2: "Stylish Makeup For Bride",
      li3: "Top Label Arrengement",
      li4: "Manicure And Pedicure",
      li5: "Portal Highlight",
    },
  ];
  return (
    <>
      {/* <!--  Pricing-plan Start --> */}
      <div class="pricing-area py-120">
        <div class="container">
          <Heading title='Pricing Plan' heading1='Our Wedding' heading2='Packages'/>
          <div class="row g-5">
            {Pricingplan.map((link, index) => (
              <>
                <div class="col-md-6 col-lg-4">
                  <div class="pricing-item position-relative">
                    <div class="pricing-item-shape">
                      <img src={Border} alt="Loading" />
                    </div>
                    <div class="pricing-header position-relative">
                      <div class="pricing-icon position-relative text-center">
                        <i class={link.icon}></i>
                      </div>
                    </div>
                    <div class="pricing-feature">
                      <div class="pricing-content bg">
                        <h4>{link.title}</h4>
                        <h1 class="pricing-amount">{link.price}</h1>
                      </div>
                      <ul>
                        <li>
                          <i class="fa-solid fa-check"></i>
                          {link.li1}
                        </li>
                        <li>
                          <i class="fa-solid fa-check"></i>
                          {link.li2}
                        </li>
                        <li>
                          <i class="fa-solid fa-check"></i>
                          {link.li3}
                        </li>
                        <li>
                          <i class="fa-solid fa-x"></i>
                          {link.li4}
                        </li>
                        <li>
                          <i class="fa-solid fa-x"></i>
                          {link.li5}
                        </li>
                      </ul>
                      <Button title='Get Started' style='theme-btn' href="#"/>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* <!--  Pricing-plan End --> */}
    </>
  );
};

export default Pricingplan;
