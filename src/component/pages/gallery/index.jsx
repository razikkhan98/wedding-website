import React from "react";

// Image
import Divider from "../../asset/images/icon-divider.png";
import Heading from "../../common/heading";

const Gallery = () => {
  return (
    <>
      {/* <!--  Gallery-area Start --> */}

      <div class="gallery-area position-relative pt-120 screen-heading">
        <div class="container">
         <Heading title='Our Gallery' heading1='Our Captured' heading2='Moments'/>
          <div class="book">
            <div class="gap"></div>
            <div class="pages">
              <div class="page"></div>
              <div class="page"></div>
              <div class="page"></div>
              <div class="page"></div>
              <div class="page"></div>
              <div class="page"></div>
            </div>
            <div class="flips">
              <div class="flip flip1">
                <div class="flip flip2">
                  <div class="flip flip3">
                    <div class="flip flip4">
                      <div class="flip flip5">
                        <div class="flip flip6">
                          <div class="flip flip7"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Gallery-area End --> */}
    </>
  );
};

export default Gallery;
