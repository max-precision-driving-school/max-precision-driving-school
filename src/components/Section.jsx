import './Section.css';
import idLogo from '../assets/id-card-regular.svg';
import car from '../assets/car-tunnel-solid.svg';
import road from '../assets/road-solid.svg';
import check from '../assets/check-solid.svg';

function Section() {
    return (
        <>
            <div class="row sec-bg">
                <div class="container-1200 m-auto">
                    <div class="row my-5">
                        <div class="col-12 mb-4 mb-md-0 col-md-4 flip-card">
                            <div class="card h-100 flip-card-inner">
                                <div class="card-body text-center flip-card-front">
                                    <h5 class="card-title">Isn't it time yet?</h5>
                                    <img src={idLogo} class="sec-img m-3"/>
                                    <p class="card-text">To get that driver's license!</p>
                                </div>
                                <div class="card-body text-center flip-card-back">
                                    <p class="card-text">
                                        Whether it's to improve your quality of life, or help you get around with day to day tasks, getting that license can be easy!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4 mb-md-0 col-md-4 flip-card">
                            <div class="card h-100 flip-card-inner">
                                <div class="card-body text-center flip-card-front">
                                    <h5 class="card-title">There's nothing stopping you!</h5>
                                    <img src={road} class="sec-img m-3"/>
                                    <p class="card-text">I'll help you overcome your fear behind the wheel.</p>
                                </div>
                                <div class="card-body text-center flip-card-back">
                                    <p class="card-text">
                                        I have over x years of experience as a driving instructor; helping hundreds of students get their license and will do the same for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mb-4 mb-md-0 col-md-4 flip-card">
                            <div class="card h-100 flip-card-inner">
                                <div class="card-body text-center flip-card-front">
                                    <h5 class="card-title">What's included?</h5>
                                    <img src={car} class="sec-img m-3"/>
                                </div>

                                <div class="card-body text-center flip-card-back">
                                    <p class="card-text">Lessons will include:</p>
                                    <ul class="list-unstyled">
                                        <li class="sec-list-item"><img src={check} />Parallel Parking</li>
                                        <li class="sec-list-item"><img src={check} />3 Point Turns</li>
                                        <li class="sec-list-item"><img src={check} />Tips & tricks about driving in traffic</li>
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

export default Section;
