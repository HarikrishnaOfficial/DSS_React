import { FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

import './footer.css'
function Footer() {
    return (
        <>
            <div className="fooetrtop text-center d-flex flex-row justify-content-around align-items-center">
                <div className="mobile">
                    <FaMobileAlt/>
                    <p>+1-409-761-0090</p>
                </div>
                <div className="mobile">
                        <FaLocationDot/>
                    <p>1600 E HIGHWAY 6, SUITE #328, ALVIN,TEXAS-77511</p>
                </div>
                <div className="mobile">
                    <MdEmail/>
                    <p>INFO@DHARMASAMSTHAN.COM</p>
                </div>
            </div>
            <div className="spacecont">

            </div>
            <div className="fooetrtbottom d-flex flex-row justify-content-between">
                <div className="aboutpara">
                    <h5>&#8213; ABOUT US</h5>
                    <p>The motto of Dharmasamsthan is to preach, practice, and establish the four pillars of Dharma - Austerity,
                         Cleanliness, Mercy, and Truthfulness. We believe that everyone has his or her role in this enormous Karma-yanga Dharmasamsthan.
                          We want everyone to achieve this.
                    </p>
                </div>
                <div className="icons">
                    <div className="iconsplate">
                        <FaSquareFacebook/>
                        <BsInstagram/>
                        <FaTwitter/>
                        <IoLogoYoutube/>
                    </div> 
                </div>
            </div>

            <div className="coptrightpart">
                <p>&#169; COPYRIGHT &#169; DHARMASAMSTHAN 2023. ALL RIGHTS RESERVED</p>
            </div>
        </>
    );
}

export default Footer;