import React from "react";
import Button from "../../common/button";
import logo from "../../asset/images/wedding_website_colour_themeandlogo.png";
const Footer = () => {

    return (
        <>
            {/* ===  Footer-Area Start ===  */}
            <div class="footer-area position-relative">
            <div class="container">
                <div class="row footer-wrapper">
                    <div class="col-md-6 col-lg-4">
                        <div class="footer-box about-us">
                            <a href="#" class="footer-logo">
                                <img src={logo} alt="Loading"/>
                            </a>
                            <p class="mb-4">
                                We are many variations of passages available but the majority have suffered alteration
                                in some form by injected humour words believable.
                            </p>
                            <ul class="footer-contact">
                                <li><a href="tel:+21236547898"><i class="fa-solid fa-phone"></i>+2 123 654 7898</a></li>
                                <li><i class="fa-solid fa-location-dot"></i>25/B Milford Road, New York</li>
                                <li><a href="mailto:info@example.com"><i
                                            class="fa-solid fa-envelope"></i>info@example.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-2">
                        <div class="footer-box list">
                            <h4 class="footer-title">Quick Links</h4>
                            <ul class="footer-list">
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> About Us</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> FAQ's</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Terms Of Service</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Privacy policy</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Our Team</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Latest Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="footer-box list">
                            <h4 class="footer-title">Our Services</h4>
                            <ul class="footer-list">
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Wedding Rings</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Guest List</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Photography Event</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Wedding Car</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Interior Decoration</a></li>
                                <li><a href="#"><i class="fas fa-angle-double-right"></i> Wedding Registry</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="footer-box list">
                            <h4 class="footer-title">Newsletter</h4>
                            <div class="footer-newsletter">
                                <p>Subscribe Our Newsletter To Get Latest Update And News</p>
                                <div class="subscribe-form">
                                    <form action="#">
                                        <input type="email" class="form-control" placeholder="Your Email"/>
                                        <Button title="Subscribe Now" href="#" style="theme-btn" type="submit"/>
                                             
                                         </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 align-self-center">
                        <p class="copyright-text">
                            © Copyright <span id="date">2024</span> <a href="#"> Loveo </a> All Rights Reserved.
                        </p>
                    </div>
                    <div class="col-md-6 align-self-center">
                        <ul class="footer-social">
                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            {/* ===  Footer-Area End ===  */}

        </>
    );

};
export default Footer;
