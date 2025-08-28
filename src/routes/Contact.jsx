import Meta from '../components/Meta';
import './Contact.css';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
	const [ formSubmitted, setFormSubmission ] = useState(false);

	const { register, handleSubmit, reset, formState: { errors } } = useForm();

	const sendEmail = (formData) => {
		// console.log(formData);
		// console.log(errors);

		emailjs.send(
			import.meta.env.VITE_EMAILJS_SERVICE_ID,
			import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
			formData,
			import.meta.env.VITE_EMAILJS_PUB_KEY,
		)
		.then(
			() => {
				console.log('SUCCESS!');
				setFormSubmission(true);
				// console.log(formSubmissionSuccessful);
			},
			(error) => {
				console.log('FAILED...', error.text);
			},
		);
		reset();
	};

	return (
		<>
		 	<Meta
				title="Contact Us | Max Precision Driving School "
				description="Let us help you drive with confidence and max precision."
			/>
			<div className="row contact-bg py-5">
				<div className="col-12">
					<h2 className="mb-5 text-light text-center pt-serif-bold">Contact</h2>
				</div>

				<div className="rounded col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 py-3 form-bg">
					<p className="fw-bold">Don't hesitate to reach out for any questions or concerns
						<small className="d-block text-danger">* Indicates required field</small>
					</p>
					<form onSubmit={ handleSubmit(sendEmail) }>
						<div className="form-group mb-4">
							<label for="name" className="form-label fw-bold">Name<span className="text-danger">*</span></label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="name"
								name="name" {...register('name', { required: "Name is required" })}
								aria-invalid={errors.name ? "true" : "false"}
							/>
							{
								errors.name?.type === 'required' && (
									<span className="badge bg-danger">{errors.name.message}</span>
								)
							}
						</div>
						<div className="form-group mb-4">
							<label for="email" className="form-label fw-bold">Email<span className="text-danger">*</span></label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="email@example.com"
								name="email" {...register('email', { required: "Email is required" })}
								aria-invalid={errors.email ? "true" : "false"}
							/>
							{
								errors.email?.type === 'required' && (
									<span className="badge bg-danger">{errors.email.message}</span>
								)
							}
						</div>
						<div className="form-group mb-4">
							<label for="phone-number" className="form-label fw-bold">Phone Number</label>
							<input
								type="phone-number"
								className="form-control"
								id="phone-number"
								placeholder="###-###-####"
								name="phone" {...register('phone', {
									pattern: {
										value: /^(\d{10})|(\d{3}-\d{3}-\d{4})$/,
										message: "Invalid format"
									}
								})}
								aria-invalid={errors.phone ? "true" : "false"}
							/>
							{
								errors.phone?.type === 'pattern' && (
									<span className="badge bg-danger">{errors.phone.message}</span>
								)
							}
						</div>
						<div className="form-group mb-4">
							<label for="content" className="form-label fw-bold">Message<span className="text-danger">*</span></label>
							<textarea
								className="form-control"
								id="content" rows="3"
								placeholder="message"
								name="content" {...register('content', {
									required: "Message is required",
									minLength: {
										value: 10,
										message: "Invalid length"
									}
								})}
								aria-invalid={errors.content ? "true" : "false"}
							/>
							{
								errors.content?.type === 'required' && (
									<span className="badge bg-danger">{errors.content.message}</span>
								)
							}
							{
								errors.content?.type === 'minLength' && (
									<span className="badge bg-danger">{errors.content.message}</span>
								)
							}
						</div>
						<div className="form-group d-flex justify-content-end mb-2">
							<button type="submit" className="btn btn-dark">Submit</button>
						</div>
					</form>
						{
							formSubmitted == true && (
								<div>
									<div className="alert alert-success alert-dismissible fade show" role="alert">
										Message sent! We will contact you soon with a response.
										<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
									</div>
								</div>
							)
						}
				</div>
				<div className="mt-4 py-3 rounded col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 form-bg">
					<div>
						<h3 className="mb-3">Our Office</h3>
						<p>Accessible by <span className="mta"><strong>N</strong></span> <span className="mta"><strong>W</strong></span> trains - Astoria-Ditmars Blvd Station</p>
						<p>Accessible by <strong>Q69</strong> Bus - Ditmars Blvd/31 St</p>
					</div>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.412974852342!2d-73.91691351375026!3d40.77493425998999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f67fc0bb721%3A0x3f8e2a638c8eccb!2s22-55%2031st%20St%2C%20Astoria%2C%20NY%2011105!5e0!3m2!1sen!2sus!4v1721047617804!5m2!1sen!2sus"
						width="100%"
						height="350"
						style={{border: 0}}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade">
						</iframe>
				</div>
			</div>
		</>
	)
}


export default Contact;