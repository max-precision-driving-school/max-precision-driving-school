import './Section.css';
import threePointTurn from '../assets/3pt-turn.mp4';
import star from '../assets/review-star.png';

function Section({sections}) {
    return (
        <>
            <div className="row sec-bg">
                <div className="container-1200 m-auto">
                    <h3 className="my-5 text-center pt-serif-bold-italic">Why Max Precision Driving School?</h3>
                    <div className="row my-5">
                        { sections.map( (s) =>
                        <div key={s.id} className="col-12 mb-4 mb-md-0 col-md-4">
                            <div className="card card-hover-effect h-100 p-3">
                                <div className="text-center">
                                    <h5 className="my-2 pt-serif-bold">{s.title}</h5>
                                    <img src={s.img} alt={s.alt} className={s.cname} />
                                </div>
                                <div className="text-center">
                                    {s.text.map( (item) =>
                                    <p key={item.id} className="pt-serif-regular">
                                       {item.t}
                                    </p>
                                    )}
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="row video-bg">
                <div className="container-1200 m-auto">
                    <div className="row">
                        <div className="col-12 text-center my-5 video-parent-container">
                            <video width="640" height="100%" controls>
                                <source src={threePointTurn} type="video/mp4"></source>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row rev-bg pt-3 py-5">
                <div className="container-1200 m-auto">
                    <div className="row">

                        <div className="col-12 py-3">
                            <h4>Student Reviews</h4>
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-end">
                            <div class="card m-3">
                                <div class="card-body">
                                    <figure>
                                        <blockquote class="blockquote fs-6">
                                            <i>"Angel lives up to his reputation! I first found him through reviews at a previous driving school. After taking my first lesson I felt that his calm and friendly teaching method really helped me improve by learning what to work on. I asked to practice specific things and Angel was always accommodating. I'd also recommend taking his highway lessons as he has all sorts of tips. Most importantly I always felt very safe and gained a lot of experience that I wouldn't get from other instructors who aren't as attentive."</i>
                                        </blockquote>
                                        <img className="review-star" src={star}></img>
                                        <img className="review-star" src={star}></img>
                                        <img className="review-star" src={star}></img>
                                        <img className="review-star" src={star}></img>
                                        <img className="review-star" src={star}></img>
                                        <figcaption class="blockquote-footer text-end">
                                            Kevin Nam
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                            <div class="card m-3">
                                <div class="card-body">
                                    <figure>
                                        <blockquote class="blockquote fs-6">
                                            <i>"Amazing instructor and company. Very professional. At first I chose another company due to price but the service reflected the price and I was so unhappy. I moved over to Angel and I can honestly say I learnt so much within a couple of lessons. He really takes time and care during the lessons to ensure you fully understand everything. I felt safe and relaxed the entire time I was learning with him.
    Thank you, Angel!"</i>
                                        </blockquote>
                                        <img className="review-star" src={star}></img>
                                        <img className="review-star" src={star}></img>
                                        <img className="review-star" src={star}></img>
                                        <img className="review-star" src={star}></img>
                                        <img className="review-star" src={star}></img>
                                        <figcaption class="blockquote-footer text-end">
                                        N Chavda
                                        </figcaption>
                                    </figure>
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
