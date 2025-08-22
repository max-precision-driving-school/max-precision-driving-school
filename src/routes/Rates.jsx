import Meta from '../components/Meta';
import instructorImg from '../assets/instructor.jpg';
import './Rates.css';

function Rates() {
	const basePackages = [
		{id: "bp1", title: "Package #1", popular: true, price: "$670", details: [
			"10 lessons of 45 minutes(given in 5 sessions of 90 minutes each)",
			"5 Hour Pre-Licensing Class",
			"Road test appointment",
			"Car for road test"
		]},
		{id: "bp2", title: "Package #2", popular: false, price: "$760", details: [
			"12 lessons of 45 minutes (given in 6 sessions of 90 minutes each)",
			"5 Hour Pre-Licensing Class",
			"Road Test appointment",
			"Car for road test"
		]},
		{id: "bp3", title: "Package #3", popular: false, price: "$850", details: [
			"14 lessons of 45 minutes(given in 7 sessions of 90 minutes each)",
			"5 Hour Pre-Licensing Class",
			"Road test appointment",
			"Car for road test"
		]},
		{id: "bp4", title: "Package #4", popular: false, price: "$940", details: [
			"16 lessons of 45 minutes(given in 8 sessions of 90 minutes each)",
			"5 Hour Pre-Licensing Class",
			"Road test appointment",
			"Car for road test"
		]},

	];

	const specializedPackages = [
		{id: "spz1", title: "Beginner Package", popular: false, price: "$1080", details: [
			"20 lessons of 45 minutes(given in 10 sessions of 90 minutes each)",
			"5 Hour Pre-Licensing Class",
			"Road test appointment",
			"Car for road test"
		]}
	];

	const specialPackages = [
		{ id: "sp1", title: "Package #5", popular: false, price: "$490", details: [
			"6 lessons of 45 minutes(given in 3 sessions of 90 minutes each)",
			"5 Hour Pre-Licensing Class",
			"Road test appointment",
			"Car for road test"
		], review: false },
		{ id: "sp2", title: "Package #6", popular: false, price: "$325", details: [
			"* For experienced drivers",
			"1 lesson of 90 minutes",
			"5 Hour Pre-Licensing Class",
			"Road test appointment",
			"Car for road test"
		], review: true }
	];


	return (
		<>
			<Meta
				title="Lessons & Rates | Max Precision Driving School "
				description="Lessons are available 7 days a week, offering the best prices in the area."
			/>
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
							<img className="img-fluid instructor-img img-height" src={instructorImg} alt="Driving with instructor"/>
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
						<div className="col-12 col-sm-4 text-center text-sm-start">
							<p>1 driving lesson (90 minutes) <span className="pt-serif-bold gold-text fs-5">$100</span></p>
							<p className="pb-4 pb-sm-0">5 Hour Pre-Licensing Class <span className="pt-serif-bold gold-text fs-5">$65</span></p>
						</div>
						<div className="col-12 col-sm-4 text-center text-sm-start">
							<p>Road test appointment <span className="pt-serif-bold gold-text fs-5">$30</span></p>
							<p>Car rental for road test <span className="pt-serif-bold gold-text fs-5">$150</span></p>
						</div>
						<div className="col-12 col-sm-4 text-center text-sm-start">
							<p className="pb-4 pb-sm-0">Highway lesson (90 minutes) <span className="pt-serif-bold gold-text fs-5">$120</span></p>
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
						<div key={bp.id} className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
							<div className="card h-100 package">
								<div className="card-body text-center">
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
							<h3 className="pt-serif-bold-italic">Specialized Package</h3>
						</div>

						{ specializedPackages.map( (spz) =>
						<div key={spz.id} className="col-12">
							<div className="card h-100">
								<div className="card-body text-center package">
									<div className="row">
										<div className="col-12 col-sm-6">
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

										<div className="col-12 col-sm-6 text-center pt-3 pt-sm-0 apply-border">
											<p className="card-text pt-serif-bold fs-4">IN THESE 10 SESSIONS OF 90 MIN EACH<br />YOU WILL LEARN TO:</p>
											<ul className="list-unstyled">
												<li className="my-2">Become familiar with your vehicle (instruments, gauges, etc.)</li>
												<li className="my-2">Steer (hand over hand)</li>
												<li className="my-2">Visual tracking</li>
												<li className="my-2">Acceleration, deceleration, stopping</li>
												<li className="my-2">Managing visibility, time and space</li>
												<li className="my-2">Moving away and out of traffic</li>
												<li className="my-2">Three-point turn</li>
												<li className="my-2">Parallel parking</li>
												<li className="my-2">Changing lanes</li>
												<li className="my-2">Defensive Driving techniques</li>
												<li className="my-2">How to handle / traffic/ pedestrians/ double parked cars</li>
											</ul>
										</div>
									</div>
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
						<div key={sp.id} className="col-12 col-sm-6 mb-4">
							<div className="card h-100 package">
								<div className="card-body text-center">
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
								{ sp.review &&
									<div className="card-footer text-center">
										<p className="pt-serif-bold m-0">YOU WILL REVIEW:</p>
										<ul className="list-unstyled">
											<li className="my-1">Parking techniques</li>
											<li className="my-1">Three-point turn</li>
											<li className="my-1">Traffic rules</li>
											<li className="my-1">Road test tips</li>
										</ul>
									</div>
								}
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