import React from "react";
// Images
import haldi1 from "../../asset/images/insta-haldi-1.jpg";
import haldi2 from "../../asset/images/insta-haldi-2.jpg";
import haldi3 from "../../asset/images/insta-haldi-3.jpg";
import haldi4 from "../../asset/images/insta-haldi-4.jpg";
import haldi5 from "../../asset/images/insta-haldi-5.jpg";
import haldi6 from "../../asset/images/insta-haldi-6.jpg";
import insta1 from "../../asset/images/insta-1.jpg";
import insta2 from "../../asset/images/insta-2.jpg";
import insta3 from "../../asset/images/insta-3.jpg";
import insta4 from "../../asset/images/insta-4.jpg";
import insta5 from "../../asset/images/insta-5.jpg";
import insta6 from "../../asset/images/insta-6.jpg";
import couple1 from "../../asset/images/insta-couple-1.jpg";
import couple2 from "../../asset/images/insta-couple-2.jpg";
import couple3 from "../../asset/images/insta-couple-3.jpg";
import couple4 from "../../asset/images/insta-couple-4.jpg";
import couple5 from "../../asset/images/insta-couple-5.jpg";
import couple6 from "../../asset/images/insta-couple-6.jpg";



const Instagram = () => {
    const InstagramImgfirst = [
        {
            img: haldi1,
        },
        {
            img: haldi2,
        },
        {
            img: haldi3,
        },
        {
            img: haldi4,
        },
        {
            img: haldi5,
        },
        {
            img: haldi6,
        },
    ];

    const InstagramImgsecond = [
        {
            img1: insta1,
        },
        {
            img1: insta2,
        },
        {
            img1: insta3,
        },
        {
            img1: insta4,
        },
        {
            img1: insta5,
        },
        {
            img1: insta6,
        },
    ];
    const InstagramImgthird = [
        {
            img2: couple1,
        },
        {
            img2: couple2,
        },
        {
            img2: couple3,
        },
        {
            img2: couple4,
        },
        {
            img2: couple5,
        },
        {
            img2: couple6,
        },
    ];


    return (
        <>
            {/* <!--  Instagram-area start --> */}

            <div class="instagram-area">
                <div class="container-fluid px-0">
                
                    <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card-wrapper">
                                    {InstagramImgfirst.map((link, index) => (
                                        <>
                                            <div class="instagram-item position-relative">
                                                <div class="instagram-img">
                                                    <img src={link.img} alt="Loading" />
                                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                                </div>
                                            </div>

                                        </>
                                    ))}
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="card-wrapper">
                                    {InstagramImgsecond.map((link, index) => (
                                        <>
                                            <div class="instagram-item position-relative">
                                                <div class="instagram-img">
                                                    <img src={link.img1} alt="Loading" />
                                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                                </div>
                                            </div>

                                        </>
                                    ))}
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card-wrapper">
                                    {InstagramImgthird.map((link, index) => (
                                        <>
                                            <div class="instagram-item position-relative">
                                                <div class="instagram-img">
                                                    <img src={link.img2} alt="Loading" />
                                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                                </div>
                                            </div>

                                        </>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!--  Instagram-area End --> */}
        </>
    );

}
export default Instagram;