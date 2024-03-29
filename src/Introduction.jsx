import { FaLinkedinIn, } from "react-icons/fa6"
import { AiOutlineSend, AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoGmail } from 'react-icons/bi'
import Typewriter from 'typewriter-effect';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Introduction() {


    return (
        <section>
            <div className="container py-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6  col-12 order-1 order-md-0">
                        <div className="intro-name d-flex flex-column gap-4">
                            <h2 className='hello'>Software Developer</h2>
                            <h1>
                                <Typewriter className="Intro-title"
                                    options={{
                                        strings: ["Hey! I'm Asif Ali",
                                            "I love coding",
                                            "A Software Developer with a heart for the web. Building digital wonders that users love to explore."
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: "1"


                                    }}
                                /></h1>
                            <Button as={Link} to="/contact" className="contact-me d-flex justify-content-center align-items-center gap-2">Hire me <AiOutlineSend /></Button>
                            <div>
                                <p>Follow Me</p>
                                <div className=" text-decoration-none">
                                    <ul className="social-icons list-unstyled d-flex justify-content-start align-items-center gap-4 my-3 text-white">

                                        <li> <a href="https://www.facebook.com/profile.php?id=100029984676089&mibextid=ZbWKwL" className=''>
                                            <BiLogoFacebook className='icon' size={"20px"} />
                                        </a>
                                        </li>

                                        {/*  <li> <a className=''>
                                            <FaXTwitter className='icon' size={"20px"} />
                                        </a>
                                        </li>
 */}
                                        <li> <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B8bCQ12DiTXKJp6fwI%2Bh4Xw%3D%3D">
                                            <FaLinkedinIn className='icon' size={"20px"} />
                                        </a>
                                        </li>
                                        <li>
                                            <a href="https://wa.me/8868873958" target="_blank" rel="noopener noreferrer">
                                                <AiOutlineWhatsApp className='icon' size={"20px"} />
                                            </a>
                                        </li>




                                        <li>
                                            <a href="mailto:asifmzn13@gmail.com">
                                                <BiLogoGmail className='icon' size={"20px"} />
                                            </a>
                                        </li>
                                        {/*    <li> <a>
                                            <FaInstagram className='icon' size={"20px"} />
                                        </a>
                                        </li>
                                         */}
                                    </ul>


                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="col-md-6 col-12 order-0 order-md-1">

                        <img src="./image/me.png" className="img-fluid vert-move"></img>

                    </div>
                </div>
            </div>



        </section>
    )
}

export default Introduction
