import React from "react";
import Heading from "../../common/heading";
import Team1 from "../../asset/images/team-1.jpg";
import Team2 from "../../asset/images/team-2.jpg";
import Team3 from "../../asset/images/team-3.jpg";
import Team4 from "../../asset/images/team-4.jpg";

const Team = () => {
  const TeamData = [
    {
      img: Team1,
      name: "Edna Craig",
      title: "Planner",
    },
    {
      img: Team2,
      name: "Jeffrey Cox",
      title: "CEO & Founder",
    },
    {
      img: Team3,
      name: "Audrey Gaddis",
      title: "Makeup Artist",
    },
    {
      img: Team4,
      name: "Rodger Garza",
      title: "Photographer",
    },
  ];
  return (
    <>
      {/* <!--  Team-Area Start --> */}
      <div class="team-area position-relative bg py-120">
        <div class="container">
          <Heading
            title="Our Planners"
            heading1="Meet Our "
            heading2="Planners"
          />
          <div class="row">
            {TeamData.map((link, index) => (
              <>
                <div class="col-md-6 col-lg-3">
                  <div class="team-item position-relative text-center">
                    <div class="team-img position-relative">
                      <img src={link.img} alt="Loading" />
                    </div>
                    <div class="team-content">
                      <div class="team-bio">
                        <h5>
                          <a href="#">{link.name}</a>
                        </h5>
                        <span>{link.title}</span>
                      </div>
                      <div class="team-social">
                        <a href="#">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* <!--  Team-Area End --> */}
    </>
  );
};

export default Team;
