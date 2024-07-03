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
                                <li class="py-2">Each lesson is 90 minutes</li>
                                <li class="py-2">English and Spanish instructors are available</li>
                                <li class="py-2">Pickup available within the area</li>
                                <li class="py-2">Highway lessons available</li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6 text-center">
                            <img class="img-fluid instructor-img" src={instructorImg} alt="Driving with instructor" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3 mb-2">
                <div class="container-1200 m-auto">
                    <div class="col-12 my-2">
                        <h3 class="">Individual Prices</h3>
                    </div>
                </div>
            </div>
            <div class="row row-bg">
                <div class="container-1200 m-auto">
                    <div class="row py-3 py-md-0">
                        <div class="col-12 col-sm-4">
                            <p>Single session 45 minutes <span class="pt-serif-bold">$50</span></p>
                            <p>Single session 90 minutes <span class="pt-serif-bold">$100</span></p>
                        </div>
                        <div class="col-12 col-sm-4">
                            <p>Road test appointment <span class="pt-serif-bold">$20</span></p>
                            <p>Car rental for for road test <span class="pt-serif-bold">$120</span></p>
                            <p>Highway lesson <span class="pt-serif-bold">$125</span></p>
                        </div>
                        <div class="col-12 col-sm-4">
                            <p>Car rental for Road Test & 45 minute warm-up practice <span class="pt-serif-bold">$170</span></p>
                            <p>10 lessions (given in 5 sessions of 90 minutes) & free pickup <span class="pt-serif-bold">$500</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row py-3">
                <div class="container-1200 m-auto">
                    <div class="row">
                        <div class="col-12 my-2">
                            <h3 class="">Base Packages</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Package #1</h3>
                                    <p class="card-text pt-serif-bold package-price">$595</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">10 lessons of 45 minutes(given in 5 sessions of 90 minutes)</li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Package #2</h3>
                                    <p class="card-text pt-serif-bold package-price">$695</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">12 lessons of 45 minutes (given in 6 sessions of 90 minutes)</li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Package #3</h3>
                                    <p class="card-text pt-serif-bold package-price">$790</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">14 lessons of 45 minutes(given in 7 sessions of 90 minutes)</li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12 my-2">
                            <h3 class="">Specialized Packages</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Beginner Package</h3>
                                    <p class="card-text pt-serif-bold package-price">$890</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">16 lessons of 45 minutes(given in 8 sessions of 90 minutes)</li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Junior Package</h3>
                                    <p class="card-text pt-serif-bold package-price">$1095</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">20 lessons of 45 minutes (given in 10 sessions of 90 minutes)</li>
                                        <li class="my-2"><i>Recommended for ages 16 & 17</i></li>
                                        <li class="my-2">Free pickup within the area</li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">Junior Package #2</h3>
                                    <p class="card-text pt-serif-bold package-price">$1590</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">30 lessons of 45 minutes(given in 15 sessions of 90 minutes)</li>
                                        <li class="my-2"><i>Recommended for ages 16 & 17</i></li>
                                        <li class="my-2">Free pickup within the area</li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5 mb-3">
                        <div class="col-12 my-2">
                            <h3 class="">Special Packages</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">S1</h3>
                                    <p class="card-text pt-serif-bold package-price">$440</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">6 lessons of 45 minutes(given in 3 sessions of 90 minutes)</li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">S2</h3>
                                    <p class="card-text pt-serif-bold package-price">$540</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">8 lessons of 45 minutes (given in 4 sessions of 90 minutes)</li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title">S3</h3>
                                    <p class="card-text pt-serif-bold package-price">$240</p>
                                    <ul class="list-unstyled">
                                        <li class="my-2">1 lesson of 90 minutes</li>
                                        <li class="my-2"><strong>For experienced drivers</strong></li>
                                        <li class="my-2">Road Test appointment</li>
                                        <li class="my-2">Car for road test</li>
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