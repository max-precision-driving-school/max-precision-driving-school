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

            <div class="row lesson-options">
                <div class="container-1200 m-auto">
                    <div class="row mb-4">
                        <div class="col-12 col-md-6">
                            <p class="pt-serif-bold-italic">At Max Precision Driving School</p>
                            <ul class="">
                                <li class="py-2 pt-serif-bold">Classes are available Monday - Saturday (9AM - 6PM)</li>
                                <li class="py-2 pt-serif-bold">Each lesson is 90 minutes</li>
                                <li class="py-2 pt-serif-bold">Highway lessons available</li>
                            </ul>
                        </div>
                        <div class="col-12 col-md-6 mt-5 mt-md-0 text-center">
                            <img class="img-fluid instructor-img" src={instructorImg} alt="Driving with instructor" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row lesson-options-2">
                <div class="container-1200 m-auto">
                    <div class="row my-4">
                        <div class="col-12 my-2 text-center">
                            <h3 class="pt-serif-bold-italic">Individual Prices</h3>
                        </div>
                        <div class="col-12 col-sm-4">
                            <p>Single session 45 minutes <span class="pt-serif-bold gold-text fs-5">$50</span></p>
                            <p>Single session 90 minutes <span class="pt-serif-bold gold-text fs-5">$100</span></p>
                            <p>5 Hour Class <span class="pt-serif-bold gold-text fs-5">$60</span></p>
                        </div>
                        <div class="col-12 col-sm-4">
                            <p>Road test appointment <span class="pt-serif-bold gold-text fs-5">$20</span></p>
                            <p>Car rental for for road test <span class="pt-serif-bold gold-text fs-5">$120</span></p>
                            <p>Highway lesson <span class="pt-serif-bold gold-text fs-5">$125</span></p>
                        </div>
                        <div class="col-12 col-sm-4">
                            <p>Car rental for Road Test & 45 minute warm-up practice <span class="pt-serif-bold gold-text fs-5">$170</span></p>
                            <p>10 lessions (given in 5 sessions of 90 minutes) & free pickup <span class="pt-serif-bold gold-text fs-5">$500</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container-1200 m-auto">
                    <div class="row my-4">
                        <div class="col-12 my-2 text-center">
                            <h3 class="pt-serif-bold-italic">Base Packages</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title pt-serif-regular">Package #1</h3>
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
                                    <h3 class="card-title pt-serif-regular">Package #2</h3>
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
                                    <h3 class="card-title pt-serif-regular">Package #3</h3>
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
                </div>
            </div>

            <div class="row specialized">
                <div class="container-1200 m-auto">
                    <div class="row my-4">
                        <div class="col-12 my-2 text-center">
                            <h3 class="pt-serif-bold-italic">Specialized Packages</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title pt-serif-regular">Beginner Package</h3>
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
                                    <h3 class="card-title pt-serif-regular">Junior Package</h3>
                                    <small class="rounded-5 p-2 popular-text"><b>Most Popular</b></small>
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
                        <div class="col-12 col-sm-6 col-md-4 mb-sm-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title pt-serif-regular">Junior Package #2</h3>
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
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="container-1200 m-auto">
                    <div class="row my-4">
                        <div class="col-12 my-2 text-center">
                            <h3 class="pt-serif-bold-italic">Special Packages</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 mb-3 mb-md-0">
                            <div class="card h-100">
                                <div class="card-body text-center package">
                                    <h3 class="card-title pt-serif-regular">S1</h3>
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
                                    <h3 class="card-title pt-serif-regular">S2</h3>
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
                                    <h3 class="card-title pt-serif-regular">S3</h3>
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