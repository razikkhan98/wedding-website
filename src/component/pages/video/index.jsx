import React from "react";

const Video = () => {
  return (
    <>
      {/* <!--  Video-area Start --> */}
      <div class="video-area">
        <div class="container-fluid px-0">
          <div class="video-content position-relative backgroung-video">
            <div class="row align-items-center">
              <div class="col-lg-12">
                <div class="video-wrapper position-relative d-flex justify-content-center">
                  <a
                    class="play-btn popup-youtube"
                    href="https://www.youtube.com/watch?v=tyBJioe8gOs"
                  >
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--  Video-area End --> */}
    </>
  );
};

export default Video;
