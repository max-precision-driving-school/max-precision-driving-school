import './Footer.css';
import location from '../assets/location-dot-solid.svg';
import phone from '../assets/phone-solid.svg';
import email from '../assets/envelope-solid.svg';

function Footer() {
    return(
        <>
            <div class="row row-bg">
                <div class="container-1200 m-auto">
                    <div class="row my-3">
                        <div class="col-12 col-md-4 my-2 bord-right">
                            <p class="fs-6 fw-bold">
                                Max Precision Driving School
                            </p>
                        </div>
                        <div class="col-12 col-md-4 my-2 mb-3 mb-md-0 text-md-center bord-right important-links">
                            <p class="fs-6 fw-bold">Important Links</p>
                            <a href="/refund-policy">Refund Policy</a>
                        </div>
                        <div class="col-12 col-md-4 my-2">
                            <p class="mb-3">
                                <img class="footer-contact-icon pe-3" src={location}></img>
                                <span class="footer-link">
                                    22-55 31st Suite UL6 2nd Floor Astoria, NY 11105
                                </span>
                            </p>

                            <p class="fs-6 my-3">
                                <img class="footer-contact-icon pe-3" src={phone}></img>
                                <a href="tel:3476085449" class="footer-link">
                                    (347)-608-5449
                                </a>
                            </p>
                        </div>
                    </div>
                </div>


                <div class="container">
                    <div class="row h-100">
                        <div class="col-12 d-flex justify-content-center p-3 align-items-center copyright-text">
                            &copy; 2024 Max Precision Driving School by Parm Sahadeo
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;