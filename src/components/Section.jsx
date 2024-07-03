import './Section.css';
import idCard from '../assets/id-card.png';
import car from '../assets/car-tunnel-solid.svg';
import road from '../assets/road.png';
import check from '../assets/check-solid.svg';
import racingCars from '../assets/racing-cars.png';
import quality from '../assets/quality.png';
import mission from '../assets/mission.png';
import value from '../assets/value.png';

function Section() {
    return (
        <>
            <div class="row sec-bg">
                <div class="container-1200 m-auto">
                        <h3 class="my-4 text-center pt-serif-bold-italic">Why Max Precision Driving School?</h3>
                    <div class="row my-4">

                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 p-3">
                                <div class="text-center">
                                    <h5 class="my-2">Quality</h5>
                                    <img src={quality} alt="quality check" class="choose-img"/>
                                </div>
                                <div class="text-center">
                                    <p class="">
                                        We provide our students with a high quality learning experience.
                                    </p>
                                    <p>
                                        Students will learn how to execute basic maneuvers such as parallel parking and executing 3 point turn with max precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 p-3">
                                <div class="text-center">
                                    <h5 class="my-2">Our Mission</h5>
                                    <img src={mission} alt="mission" class="choose-img"/>
                                </div>
                                <div class="text-center">
                                    <p>
                                    Our instructors are highly experienced in road etiquette and offer a positive and enlightening environment for all students, expecially for first time and nervous drivers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 p-3">
                                <div class="text-center">
                                    <h5 class="my-2">Value</h5>
                                    <img src={value} alt="value" class="choose-img"/>
                                </div>
                                <div class="text-center">
                                    <p>
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
