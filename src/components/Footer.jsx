import './Footer.css';
import location from '../assets/location-dot-solid.svg';
import phone from '../assets/phone-solid.svg';
import email from '../assets/envelope-solid.svg';
import instagram from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.jpg';

function Footer() {
    const year = new Date().getFullYear();
    return(
        <>
            <div className="row row-bg pt-5 pb-4 footer">
                <div className="container-1200 m-auto">
                    <div className="row my-3">
                        <div className="col-12 col-md-4 my-2 text-center bord-right">
                            <p className="fs-5 fw-bold">
                                Max Precision Driving School
                            </p>
                            <p className="mt-2">
                                Want to learn more? <br /> Follow our social media accounts!
                            </p>
                            <a href="https://www.instagram.com/maxprecisiondrivingschool/" target="_blank">
                                <img className="social-icon" src={instagram}>
                                </img>
                            </a>
                            <a href="https://wa.me/19177348361" target="_blank">
                                <img className="social-icon whatsapp-icon" src={whatsapp}>
                                </img>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 my-2 mb-3 mb-md-0 text-center important-links">
                            <p className="fs-6 fw-bold">Important Links</p>
                            <a className="light-text-color" href="/refund-policy">Refund Policy</a>
                        </div>
                        <div className="col-12 col-md-4 my-2">
                            <p className="d-flex mb-3 justify-content-md-start justify-content-center">
                                <img className="footer-contact-icon pe-3" src={location}></img>
                                <span className="footer-link light-text-color">
                                    22-55 31st Suite UL6 2nd Floor Astoria, NY 11105
                                </span>
                            </p>

                            <p className="fs-6 my-3 text-center text-md-start">
                                <img className="footer-contact-icon pe-3" src={phone}></img>
                                <a href="tel:9177348361" className="footer-link light-text-color">
                                    (917)-734-8361
                                </a>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container mt-4">
                    <div className="row h-100">
                        <div className="col-12 d-flex justify-content-center p-3 align-items-center copyright-text">
                            Copyright &copy; {year} Max Precision Driving School by Parm Sahadeo
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;