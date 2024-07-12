import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'xxx', e.target, {
            publicKey: 'xxxx',
        })
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

            <div class="row contact-bg p-5">
                <div class="rounded col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-3 py-3">
                    <p class="fw-bold">Don't hesitate to reach out for any questions or concerns!</p>
                    <form onSubmit={sendEmail}>
                        <div class="form-group mb-4">
                            <label for="name" class="form-label fw-bold">Name</label>
                            <input type="text" class="form-control" id="name" name="name"/>
                        </div>
                        <div class="form-group mb-4">
                            <label for="email" class="form-label fw-bold">Email</label>
                            <input type="email"  class="form-control" id="email" placeholder="email@example.com" name="email"/>
                        </div>
                        <div class="form-group mb-4">
                            <label for="phone-number" class="form-label fw-bold">Phone Number</label>
                            <input type="phone-number"  class="form-control" id="phone-number" name="phone"/>
                        </div>
                        <div class="form-group mb-4">
                            <label for="message" class="form-label fw-bold">Message</label>
                            <textarea class="form-control" id="message" rows="3" name="message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-dark float-end">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Contact;