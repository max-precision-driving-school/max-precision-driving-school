import instructorImg from '../assets/instructor.jpg';
import './Rates.css';

function Rates() {
    return (
        <>
            <div class="row py-4">
                <div class="container-1200 m-auto">
                    <div class="col-12">
                        <h2 class="my-2">Lessons & Rates</h2>
                    </div>
                </div>
            </div>
            
            <div class="row py-5 lesson-options">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <div class="col-12 col-md-6"> 
                            <p>At Max Precision Driving School</p>

                            <ul class="">
                                <li class="py-2">Classes are available Monday - Saturday (9AM - 6PM)</li>
                                <li class="py-2">Lessons are 45 minutes</li>
                                <li class="py-2">English and Spanish instructors are available</li>
                                <li class="py-2">Pickup available within the area</li>
                                <li class="py-2">Highway lessons are available after obtaining Drivers License</li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6 text-center">
                            <img class="img-fluid instructor-img" src={instructorImg} alt="Driving with instructor" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row py-5">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Package #1</h3>
                                    <p class="card-text pt-serif-bold package-price">$650</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">10 Lessons (45 mins)</li>
                                        <li class="my-2">For new drivers</li>
                                        <li class="my-2">Car available for DMV road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Package #2</h3>
                                    <p class="card-text pt-serif-bold package-price">$450</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">5 Lessons (45 mins)</li>
                                        <li class="my-2">For drivers with prior driving experience</li>
                                        <li class="my-2">Car available for DMV road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Package #3</h3>
                                    <p class="card-text pt-serif-bold package-price">$250</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">3 Lessons (45 mins)</li>
                                        <li class="my-2">For experienced drivers</li>
                                        <li class="my-2">Car available for DMV road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Rates;