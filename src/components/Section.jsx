import './Section.css';
import threePointTurn from '../assets/3pt-turn.mp4';

function Section({sections}) {
    return (
        <>
            <div className="row sec-bg">
                <div className="container-1200 m-auto">
                    <h3 className="my-5 text-center pt-serif-bold-italic">Why Max Precision Driving School?</h3>
                    <div className="row my-5">
                        { sections.map( (s) =>
                        <div key={s.id} className="col-12 mb-4 mb-md-0 col-md-4">
                            <div className="card h-100 p-3">
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
                                <source type="video/mp4"></source>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section;
