import './FiveHrClass.css';
import carLogo from '../assets/chevy.png'

function FiveHrClass() {
    return (
        <>
            <div class="row py-4 five-hour-content">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="my-2">5 Hour Class</h2>
                        </div>

                        <div class="col-12 my-4">
                            <p class="pt-serif-bold-italic">
                                The 5 hour pre-licensing course audio/visual lecture covers the fundamentals of driving, including:
                            </p>
                            <ul class="pt-serif-regular">
                                <li>Defensive driving techniques</li>
                                <li>Traffic laws</li>
                                <li>Driving in weather conditions</li>
                                <li>Effects of Alcohol/Other Drugs while driving</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <p class="pt-serif-regular">
                                <b>
                                    The only requirement to take the course is a valid Learner's Permit.
                                </b> Every non-license applicants is required to take this course and will be issued a certificate upon completion, MV-278, which will be required when taking the DMV road test.
                            </p>
                        </div>
                        <div class="col-12 col-sm-6 d-flex justify-content-center">
                            <img src={carLogo} alt="car logo" class="img-fluid chevy-logo"></img>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <p class="pt-serif-regular">
                                The course is offered virtually via a zoom meeting for a fee of <strong>$60</strong>. The certificate is valid up to one year from date of issuance. Students must re-take the course in the event their certificate expires.
                                <br /> <br />
                                Certificates can be mailed or picked up from our office located at 22-55 31st Suite UL6 2nd Floor Astoria, NY 11105.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiveHrClass;