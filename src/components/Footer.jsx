import './Footer.css';
import location from '../assets/location-dot-solid.svg';
import phone from '../assets/phone-solid.svg';
import email from '../assets/envelope-solid.svg';

function Footer() {
    return(
        <>
            <div class="row row-bg">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <p class="fs-6 fw-bold my-3 bord-right">
                                Max Precision Driving School
                            </p>
                        </div>
                        <div class="col-12 col-md-8">
                            <p class="fs-6 my-3">
                                <img class="footer-contact-icon px-3" src={location}></img>
                                22-55 31st Suite UL6 2nd Floor Astoria, NY 11105
                            </p>
                            <a href="tel:9179396379" class="fs-6 my-3 footer-link">
                                <img class="footer-contact-icon px-3" src={phone}></img>
                                (917)-939-6379
                            </a>
                            <a href="mailto:jarengirao@gmail.com" class="fs-6 my-3 d-block footer-link">
                                <img class="footer-contact-icon px-3" src={email}></img>
                                jarengirao@gmail.com
                            </a>
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