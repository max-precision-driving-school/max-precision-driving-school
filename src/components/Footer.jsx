import './Footer.css';
import location from '../assets/location-dot-solid.svg';
import phone from '../assets/phone-solid.svg';
import email from '../assets/envelope-solid.svg';

function Footer() {
    return(
        <>
            <div className="row row-bg">
                <div className="container-1200 m-auto">
                    <div className="row my-3">
                        <div className="col-12 col-md-4 my-2 bord-right">
                            <p className="fs-6 fw-bold">
                                Max Precision Driving School
                            </p>
                        </div>
                        <div className="col-12 col-md-4 my-2 mb-3 mb-md-0 text-md-center bord-right important-links">
                            <p className="fs-6 fw-bold">Important Links</p>
                            <a href="/refund-policy">Refund Policy</a>
                        </div>
                        <div className="col-12 col-md-4 my-2">
                            <p className="mb-3">
                                <img className="footer-contact-icon pe-3" src={location}></img>
                                <span className="footer-link">
                                    22-55 31st Suite UL6 2nd Floor Astoria, NY 11105
                                </span>
                            </p>

                            <p className="fs-6 my-3">
                                <img className="footer-contact-icon pe-3" src={phone}></img>
                                <a href="tel:9177348361" className="footer-link">
                                    (917)-734-8361
                                </a>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row h-100">
                        <div className="col-12 d-flex justify-content-center p-3 align-items-center copyright-text">
                            &copy; 2024 Max Precision Driving School by Parm Sahadeo
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;