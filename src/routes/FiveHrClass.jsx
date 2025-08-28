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

			<div className="row py-4 five-hr-image-bg">
				<div className="container-1200 mx-auto">
					<div className="row">
						<div className="col-12 py-4 text-bg">
							<h2 className="text-light pt-serif-bold text-center">5 Hour Class</h2>
						</div>
						<div className="col-12 my-4 text-bg">
							<h4 className="pt-serif-regular text-white p-4">
								The 5 hour pre-licensing course is a speech/lecture and film that is mandatory to take for first-time license applicants.
							</h4>
						</div>

					</div>
				</div>
			</div>
			<div className="row py-4 instructor-image-bg">
				<div className="container-1200 m-auto">
					<div className="row">
						<div className="col-12 col-sm-6 offset-sm-6 p-4 d-flex align-items-center text-light text-bg">
							<p className="pt-serif-regular fs-5">
								Every non-license applicant must take this course in order to receive a certificate under MV-278, which will be asked for when taking the road test.
								<br /><br />
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