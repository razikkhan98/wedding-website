import React from "react";

// Image
import Divider from "../../asset/images/icon-divider.png";
import Heading from "../../common/heading";
import Team1 from "../../asset/images/team-1.jpg";
import Team2 from "../../asset/images/team-2.jpg";
import Team4 from "../../asset/images/team-4.jpg";
import border from "../../asset/images/border-2.png";


function Testimonial() {
    const TestimonialImgfirst = [
        {
            name: "Gordo Novak",
            title: "Clients",
            description:
                "There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority.",
            img: Team1,

        },
        {
            name: "Reid E Butt",
            title: "Clients",
            description:
                "There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority.",
            img: Team2,

        },
    ];

    const TestimonialImgsecond = [
        {
            name: "Sylvia H Green",
            title1: "Clients",
            description1:
                "There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority.",

            img1: Team4,
        },
        {
            name: "Gordo Novak",
            title1: "Clients",
            description1:
                "There are many variations of the read passages available but the majority There are many variations of the read passages available but the majority.",
            img1: Team1,
        },
    ];

    return (
        <>
            {/* <!--  Testimonial-area start --> */}

            <div class="testimonial-area bg position-relative py-120">
                <div class="container">
                    <Heading title='Testimonials' heading1='What Our Client' heading2="Say's" />
                    <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-bs-ride="carousel" >
                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="card-wrapper">

                                        {TestimonialImgfirst.map((link, index) => (
                                            <>
                                                    <div class="testimonial-single position-relative testimonial-card">

                                                        <div class="testimonial-shape">
                                                            <img src={border} alt="Loading" />
                                                        </div>
                                                        <div class="testimonial-content d-flex align-items-center">
                                                            <div class="testimonial-author-img">
                                                                <img src={link.img} alt="Loading" />
                                                            </div>
                                                            <div class="testimonial-author-info">
                                                                <h4>{link.name}</h4>
                                                                <p>{link.title}</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonial-quote">
                                                            <p>
                                                                {link.description}
                                                            </p>
                                                        </div>
                                                        <div class="testimonial-rate">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                            </>
                                        ))}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-wrapper">
                                        {TestimonialImgsecond.map((link, index) => (
                                            <>
                                                    <div class="testimonial-single position-relative testimonial-card">
                                                        <div class="testimonial-shape">
                                                            <img src={border} alt="Loading" />
                                                        </div>
                                                        <div class="testimonial-content d-flex align-items-center">
                                                            <div class="testimonial-author-img">
                                                                <img src={link.img1} alt="Loading" />
                                                            </div>
                                                            <div class="testimonial-author-info">
                                                                <h4>{link.name}</h4>
                                                                <p>{link.title1}</p>
                                                            </div>
                                                        </div>
                                                        <div class="testimonial-quote">
                                                            <p>
                                                                {link.description1}
                                                            </p>
                                                        </div>
                                                        <div class="testimonial-rate">
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                            <i class="fa-solid fa-star"></i>
                                                        </div>
                                                    </div>
                                            </>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <!--  Testimonial-area End --> */}
        </>
    );
};

export default Testimonial;
