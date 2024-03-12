import React from "react";
import Heading from "../../common/heading";
import Button from "../../common/button";
import blog1 from "../../asset/images/blog-1.jpg";
import blog2 from "../../asset/images/blog-2.jpg";
import blog3 from "../../asset/images/blog-3.jpg";


const Blog = () => {
  const BlogData = [
    {
      img: blog1,
      name: "By Alicia Davis",
      title: "May 12, 2023",
      discription:"There are many variations of the passages available suffered"
    },
    {
      img: blog2,
      name: "By Alicia Davis",
      title: "May 12, 2023",
      discription:"There are many variations of the passages available suffered"
    },
    {
      img: blog3,
      name: "By Alicia Davis",
      title: "May 12, 2023",
      discription:"There are many variations of the passages available suffered"
    },
    
  ];
  return (
    <>
      {/* <!--  Blog-Area Start --> */}
      <div class="blog-area py-120">
        <div class="container">
          <Heading
            title="Our Blog"
            heading1="Our Latest "
            heading2="News &amp; Blog"
          />
          <div class="row">
            {BlogData.map((link, index) => (
              <>
                <div class="col-md-6 col-lg-4">
                    <div class="blog-item wow">
                        <div class="blog-item-img">
                            <img src={link.img} alt="Loading"/>
                        </div>
                        <div class="blog-item-info">
                            <div class="blog-item-meta">
                                <ul>
                                    <li><a href="#"><i class="fa-solid fa-circle-user"></i> {link.name}</a></li>
                                    <li><a href="#"><i class="fa-regular fa-calendar-days"></i> {link.title}</a>
                                    </li>
                                </ul>
                            </div>
                            <h4 class="blog-title">
                                <a href="#">{link.discription}</a>
                            </h4>
                            <Button title="Read More" href="#" style="theme-btn" />
                        </div>
                    </div>
                </div>

              </>
            ))}
          </div>
        </div>
      </div>
      {/* <!--  Blog-Area End --> */}
    </>
  );
};

export default Blog;
