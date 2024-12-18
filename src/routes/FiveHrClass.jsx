import Meta from '../components/Meta';
import './FiveHrClass.css';
import classroom from '../assets/classroom.jpg'
// import carParked from '../assets/car-parked.jpg'
import carParked from '../assets/5hr-v3.jpeg'

function FiveHrClass() {
	return (
		<>
		 	<Meta
				title="5 Hour Class| Max Precision Driving School "
				description="The 5 hour pre-licensing course is a speech/lecture and film that is mandatory to take for first-time license applicants."
			/>
			<div className="row py-4 five-hour-content">
				<div className="container-1200 m-auto">
					<div className="row">
						<div className="col-12">
							<h2 className="my-2">5 Hour Class</h2>
						</div>

					</div>

				</div>
			</div>
			<div className="row py-4 mp-dark-bg">
				<div className="container-1200 m-auto">
					<div className="row">
						<div className="col-12 my-4">
							<h4 className="pt-serif-regular text-white">
								The 5 hour pre-licensing course is a speech/lecture and film that is mandatory to take for first-time license applicants.
							</h4>
						</div>
						<div className="col-12 my-3 d-flex justify-content-center">
							<img src={carParked} alt="parked cars" className="img-fluid five-hr-image"></img>
						</div>

					</div>
				</div>
			</div>
			<div className="row py-4">
				<div className="container-1200 m-auto">
					<div className="row">
						<div className="col-12 col-sm-6 d-flex align-items-center">
							<p className="pt-serif-regular fs-5">
								Every non-license applicant must take this course in order to recieve a certificate under MV-278, which will be asked for when taking the road test.
							</p>
						</div>
						<div className="col-12 col-sm-6 d-flex justify-content-center">
							<img src={classroom} alt="classroom" className="img-fluid five-hr-image"></img>
						</div>
					</div>
					<div className="row">
						<div className="col-12 mt-4">
							<p className="pt-serif-regular fs-5">
								Certificates will be available for pick up at our office located at 22-55 31st Suite UL6 2nd Floor Astoria, NY 11105.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FiveHrClass;