import './Section.css';
import idCard from '../assets/id-card.png';
import car from '../assets/car-tunnel-solid.svg';
import road from '../assets/road.png';
import check from '../assets/check-solid.svg';
import racingCars from '../assets/racing-cars.png';

function Section() {
    return (
        <>
            <div class="row sec-bg">
                <div class="container-1200 m-auto">
                    <div class="row my-4">
                        <h3 class="mb-4 text-center pt-serif-bold-italic">Why Max Precision Driving School?</h3>

                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 ">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Quality</h5>
                                </div>
                                <div class="card-body text-center">
                                    <p class="card-text">
                                        We provide our students with a high quality learning experience.
                                    </p>
                                    <p class="card-text">
                                        Students will learn how to execute basic maneuvers such as parallel parking and executing 3 point turn with max precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 ">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Our Mission</h5>
                                </div>
                                <div class="card-body text-center">
                                    <p class="card-text">
                                    Our instructors are highly experienced in road etiquette and offer a positive and enlightening environment for all students, expecially for first time and nervous drivers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 ">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Value</h5>
                                </div>
                                <div class="card-body text-center">
                                    <p class="card-text">
                                        We are currently located in Astoria and offer the best rates in the neighborhood!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section;
