import './Section.css';
import idCard from '../assets/id-card.png';
import car from '../assets/car-tunnel-solid.svg';
import road from '../assets/road.png';
import check from '../assets/check-solid.svg';
import racingCars from '../assets/racing-cars.png';
import quality from '../assets/quality-2.png';
import mission from '../assets/mission-2.png';
import value from '../assets/value-2.png';

function Section() {
    return (
        <>
            <div class="row sec-bg">
                <div class="container-1200 m-auto">
                        <h3 class="my-5 text-center pt-serif-bold-italic">Why Max Precision Driving School?</h3>
                    <div class="row my-4">

                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 p-3">
                                <div class="text-center">
                                    <h5 class="my-2 pt-serif-bold">Quality</h5>
                                    <img src={quality} alt="quality check" class="my-3 choose-img"/>
                                </div>
                                <div class="text-center">
                                    <p class="pt-serif-regular">
                                        We provide our students with a high quality learning experience.
                                    </p>
                                    <p class="pt-serif-regular">
                                        Our instructors are fluent in English and Spanish!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 p-3">
                                <div class="text-center">
                                    <h5 class="my-2 pt-serif-bold">Our Mission</h5>
                                    <img src={mission} alt="mission" class="my-3 choose-img"/>
                                </div>
                                <div class="text-center">
                                    <p class="pt-serif-regular">
                                        Our instructors are highly experienced in road etiquette and offer a positive and enlightening environment for all students, expecially for first time and nervous drivers.
                                    </p>
                                    <p class="pt-serif-regular">
                                        Students will learn how to execute basic maneuvers such as parallel parking and executing 3 point turn with max precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 p-3">
                                <div class="text-center">
                                    <h5 class="my-2 pt-serif-bold">Value</h5>
                                    <img src={value} alt="value" class="my-3 choose-img"/>
                                </div>
                                <div class="text-center">
                                    <p class="pt-serif-regular">
                                        We value our students and ensure that they not only pass their road test but gain confidence in their abilities as a driver.
                                    </p>
                                    <p class="pt-serif-regular">
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
