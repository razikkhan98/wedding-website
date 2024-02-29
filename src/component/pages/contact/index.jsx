import React from "react";
import Quote from "../../asset/images/quote-1.png";
import Button from "../../common/button";

const Content = () => {
  return (
    <>
      {/* <!--  Quote-Area Start --> */}
      <div class="quote-area py-120">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="quote-img">
                <img src={Quote} alt="Loading" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="quote-content">
                <div class="quote-header">
                  <h6>Get Free Quote</h6>
                  <h2>Feel Free To Contact With Us</h2>
                </div>
                <form action="#">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          name="subject"
                          class="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <select class="form-select" name="service">
                          <option value="">Choose Service</option>
                          <option value="1">Wedding Rings</option>
                          <option value="2">Guest List</option>
                          <option value="3">Photography Event</option>
                          <option value="4">Wedding Car</option>
                          <option value="5">Interior Decoration</option>
                          <option value="6">Wedding Registry</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea
                      name="message"
                      class="form-control"
                      placeholder="Type Message"
                      rows="4"
                    ></textarea>
                  </div>
                  <Button title='Submit Now' href='#' style='theme-btn'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <!--  Quote-Area End --> */}


      {/* <!--  Contact-Area Start --> */}

    <div class="contact-area position-relative pb-120">
        <div class="container">
            <div class="cnt-img position-relative d-flex align-items-center">

                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <div class="cnt-text position-relative ">
                            <h1>We Are Ready To Celebrate Your Wedding</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit commodo leo sed scelerisque turpis
                                handful of
                                model sentence structures to generate which looks reasonable in finibus tellus. </p>

                            <Button title='Contact Now' href='#' style='theme-btn mt-30'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* <!--  Contact-Area End --> */}
    </>
  );
};

export default Content;
