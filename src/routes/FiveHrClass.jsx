import './FiveHrClass.css';
import classroom from '../assets/classroom.jpg'
import carParked from '../assets/car-parked.jpg'

function FiveHrClass() {
    return (
        <>
            <div class="row py-4 five-hour-content">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="my-2">5 Hour Class</h2>
                        </div>

                    </div>

                </div>
            </div>
            <div class="row py-4 mp-dark-bg">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <div class="col-12 my-4">
                            <h4 class="pt-serif-regular text-white">
                                The 5 hour pre-licensing course speech lecture and film that is manditory to take for first-time license applicants.
                            </h4>
                        </div>
                        <div class="col-12 my-3 d-flex justify-content-center">
                            <img src={carParked} alt="parked cars" class="img-fluid five-hr-image"></img>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row py-4">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <div class="col-12 col-sm-6 d-flex align-items-center">
                            <p class="pt-serif-regular fs-5">
                                Every non-license applicant must take this course in order to recieve a certificate under MV-278, which will be asked for when taking the road test.
                            </p>
                        </div>
                        <div class="col-12 col-sm-6 d-flex justify-content-center">
                            <img src={classroom} alt="classroom" class="img-fluid five-hr-image"></img>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-4">
                            <p class="pt-serif-regular fs-5">
                                Certificates will be available for pick up at our office located at 22-55 31st Suite UL6 2nd Floor Astoria, NY 11105.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FiveHrClass;