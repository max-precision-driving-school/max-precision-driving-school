import instructorImg from '../assets/instructor.jpg';
import './Rates.css';

function Rates() {
    const basePackages = [
        {id: "bp1", title: "Package #1", popular: true, price: "$595", details: [
            "10 lessons of 45 minutes(given in 5 sessions of 90 minutes each)",
            "Road Test appointment",
            "Car for road test"
        ]},
        {id: "bp2", title: "Package #2", popular: false, price: "$695", details: [
            "12 lessons of 45 minutes (given in 6 sessions of 90 minutes each)",
            "Road Test appointment",
            "Car for road test"
        ]},
        {id: "bp3", title: "Package #3", popular: false, price: "$790", details: [
            "14 lessons of 45 minutes(given in 7 sessions of 90 minutes each)",
            "Road Test appointment",
            "Car for road test"
        ]}
    ];

    const specializedPackages = [
        {id: "spz1", title: "Beginner Package", popular: false, price: "$890", details: [
            "16 lessons of 45 minutes(given in 8 sessions of 90 minutes each)",
            "Road Test appointment",
            "Car for road test"
        ]},
        {id: "spz2", title: "Junior Package #1", popular: false, price: "$1590", details: [
            "30 lessons of 45 minutes(given in 15 sessions of 90 minutes each)",
            "* Recommended for ages 16 & 17",
            "Free pickup within the area",
            "Road Test appointment",
            "Car for road test"
        ]},
        {id: "spz3", title: "Junior Package #2", popular: false, price: "$1090", details: [
            "20 lessons of 45 minutes (given in 10 sessions of 90 minutes each)",
            "* Recommended for ages 16 & 17",
            "Free pickup within the area",
            "Road Test appointment",
            "Car for road test"
        ]}
    ];

    const specialPackages = [
        {id: "sp1", title: "Package #4", popular: false, price: "$440", details: [
            "6 lessons of 45 minutes(given in 3 sessions of 90 minutes each)",
            "Road Test appointment",
            "Car for road test"
        ]},
        {id: "sp2", title: "Package #5", popular: false, price: "$240", details: [
            "1 lesson of 90 minutes",
            "* For experienced drivers",
            "Road Test appointment",
            "Car for road test",
            "* No pickup (with pickup in the area $255)"
        ]}
    ];


    return (
        <>
            <div className="row py-4">
                <div className="container-1200 m-auto">
                    <div className="col-12">
                        <h2 className="my-2">Lessons & Rates</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="container-1200 m-auto">
                    <div className="row mb-4">
                        <div className="col-12 col-md-6">
                            <p className="pt-serif-bold-italic">At Max Precision Driving School</p>
                            <ul className="">
                                <li className="py-2 pt-serif-bold">Classes are available 7 days a week (8AM - 6PM)</li>
                                <li className="py-2 pt-serif-bold">Each lesson is 90 minutes</li>
                                <li className="py-2 pt-serif-bold">Highway lessons available</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 mt-5 mt-md-0 text-center">
                            <img className="img-fluid instructor-img" src={instructorImg} alt="Driving with instructor" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ind-prices-section">
                <div className="container-1200 m-auto">
                    <div className="row my-4">
                        <div className="col-12 my-4 text-center">
                            <h3 className="pt-serif-bold-italic">Individual Prices</h3>
                        </div>
                        <div className="col-12 col-sm-4">
                            <p>Single session 45 minutes <span className="pt-serif-bold gold-text fs-5">$50</span></p>
                            <p>Single session 90 minutes <span className="pt-serif-bold gold-text fs-5">$100</span></p>
                            <p>5 Hour Class <span className="pt-serif-bold gold-text fs-5">$60</span></p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <p>Road test appointment <span className="pt-serif-bold gold-text fs-5">$20</span></p>
                            <p>Car rental for for road test <span className="pt-serif-bold gold-text fs-5">$120</span></p>
                            <p>Highway lesson (90 minutes) <span className="pt-serif-bold gold-text fs-5">$125</span></p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <p>Car rental for Road Test & 45 minute warm-up practice <span className="pt-serif-bold gold-text fs-5">$170</span></p>
                            <p>10 lessions (given in 5 sessions of 90 minutes) & free pickup <span className="pt-serif-bold gold-text fs-5">$500</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pb-3">
                <div className="container-1200 m-auto">
                    <div className="row my-4">
                        <div className="col-12 my-4 text-center">
                            <h3 className="pt-serif-bold-italic">Base Packages</h3>
                        </div>

                        { basePackages.map( (bp) =>
                        <div key={bp.id} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="card h-100">
                                <div className="card-body text-center package">
                                    <h3 className="card-title pt-serif-bold rounded-5 p-2">{bp.title}</h3>
                                    { bp.popular &&
                                        <small className="rounded-5 p-2 popular-text"><b>Most Popular</b></small>
                                    }
                                    <p className="card-text pt-serif-bold package-price">{bp.price}</p>
                                    <ul className="list-unstyled">
                                        {bp.details.map( (d) =>
                                            <li key={d.toString()} className="my-2">{d}</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )}

                    </div>
                </div>
            </div>

            <div className="row specialized pb-3">
                <div className="container-1200 m-auto">
                    <div className="row my-4">
                        <div className="col-12 my-4 text-center">
                            <h3 className="pt-serif-bold-italic">Specialized Packages</h3>
                        </div>

                        { specializedPackages.map( (spz) =>
                        <div key={spz.id} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="card h-100">
                                <div className="card-body text-center package">
                                    <h3 className="card-title pt-serif-bold rounded-5 p-2">{spz.title}</h3>
                                    <p className="card-text pt-serif-bold package-price">{spz.price}</p>
                                    <ul className="list-unstyled">
                                        { spz.details.map( (d) =>
                                            <li key={d.toString()} className="my-2">
                                                { d.includes('*') ? <i>{d}</i> : d }
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )}

                    </div>
                </div>
            </div>

            <div className="row pb-3">
                <div className="container-1200 m-auto">
                    <div className="row my-4 d-flex justify-content-evenly">
                        <div className="col-12 my-4 text-center">
                            <h3 className="pt-serif-bold-italic">Special Packages</h3>
                        </div>

                        { specialPackages.map( (sp) =>
                        <div key={sp.id} className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
                            <div className="card h-100">
                                <div className="card-body text-center package">
                                    <h3 className="card-title pt-serif-bold rounded-5 p-2">{sp.title}</h3>
                                    <p className="card-text pt-serif-bold package-price">{sp.price}</p>
                                    <ul className="list-unstyled">
                                        { sp.details.map( (d) =>
                                            <li key={d.toString()} className="my-2">
                                                { d.includes('*') ? <b>{d}</b> : d }
                                            </li>
                                        )}
                                    </ul>
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


export default Rates;