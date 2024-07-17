import './Section.css';

function Section({sections}) {
    return (
        <>
            <div class="row sec-bg">
                <div class="container-1200 m-auto">
                    <h3 class="my-5 text-center pt-serif-bold-italic">Why Max Precision Driving School?</h3>
                    <div class="row my-4">
                        { sections.map( (s) =>
                        <div key={s.id} class="col-12 mb-4 mb-md-0 col-md-4">
                            <div class="card h-100 p-3">
                                <div class="text-center">
                                    <h5 class="my-2 pt-serif-bold">{s.title}</h5>
                                    <img src={s.img} alt={s.alt} className={s.cname} />
                                </div>
                                <div class="text-center">
                                    {s.text.map( (item) =>
                                    <p key={item.id} class="pt-serif-regular">
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
        </>
    )
}

export default Section;
