import './Contact.css';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        debugger;
        console.log(data);
    }

    console.log(errors);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUB_KEY,
        )
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
        e.target.reset();
    };

    return (
        <>
            <div class="row py-4">
                <div class="container-1200 m-auto">
                    <div class="col-12">
                        <h2 class="my-2">Contact</h2>
                    </div>
                </div>
            </div>

            <div class="row contact-bg py-5">
                <div class="rounded col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 py-3">
                    <p class="fw-bold">Don't hesitate to reach out for any questions or concerns</p>
                    <form onSubmit={ handleSubmit(onSubmit) }>
                        <div class="form-group mb-4">
                            <label for="name" class="form-label fw-bold">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="name"
                                id="name"
                                name="name" {...register('name', { required: "Name is required" })}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {
                                errors.name?.type === 'required' && (
                                    <span class="badge bg-danger">{errors.name.message}</span>
                                )
                            }
                        </div>
                        <div class="form-group mb-4">
                            <label for="email" class="form-label fw-bold">Email</label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="email@example.com"
                                name="email" {...register('email', { required: "Email is required" })}
                                aria-invalid={errors.email ? "true" : "false"}
                            />
                            {
                                errors.email?.type === 'required' && (
                                    <span class="badge bg-danger">{errors.email.message}</span>
                                )
                            }
                        </div>
                        <div class="form-group mb-4">
                            <label for="phone-number" class="form-label fw-bold">Phone Number</label>
                            <input
                                type="phone-number"
                                class="form-control"
                                id="phone-number"
                                placeholder="###-###-####"
                                name="phone" {...register('phoneNumber', {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^(\d{10})|(\d{3}-\d{3}-\d{4})$/,
                                        message: "Invalid format"
                                    }
                                })}
                                aria-invalid={errors.phoneNumber ? "true" : "false"}
                            />
                            {
                                errors.phoneNumber?.type === 'required' && (
                                    <span class="badge bg-danger">{errors.phoneNumber.message}</span>
                                )
                            }
                            {
                                errors.phoneNumber?.type === 'pattern' && (
                                    <span class="badge bg-danger">{errors.phoneNumber.message}</span>
                                )
                            }
                        </div>
                        <div class="form-group mb-4">
                            <label for="message" class="form-label fw-bold">Message</label>
                            <textarea
                                class="form-control"
                                id="message" rows="3"
                                placeholder="message"
                                name="message" {...register('messageContent', { required: "Message is required" })}
                                aria-invalid={errors.messageContent ? "true" : "false"}
                            />
                            {
                                errors.messageContent?.type === 'required' && (
                                    <span class="badge bg-danger">{errors.messageContent.message}</span>
                                )
                            }
                        </div>
                        <button type="submit" class="btn btn-dark float-end">Submit</button>
                    </form>
                </div>
                <div class="mt-4 py-3 rounded col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                    <div>
                        <h3 class="mb-3">Our Office</h3>
                        <p>Accessible by <span class="mta"><strong>N</strong></span> <span class="mta"><strong>W</strong></span> trains - Astoria-Ditmars Blvd Station</p>
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