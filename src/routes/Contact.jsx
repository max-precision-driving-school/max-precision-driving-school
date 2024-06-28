import comingSoon from '../assets/coming-soon.png';
import './Contact.css';

function Contact() {
    return (
        <>
            <div class="row contact-bg">

            <div class="row mx-5">
                <div class="col-6 offset-3 my-2">
                    <h2 class="my-3">Contact</h2>
                    <p>
                        Don't hesitate to reach out for any questions or concerns!
                    </p>
                </div>
                
                <div class="col-6 offset-3">
                    <div class="row">
                        <form class="mb-5">
                            <div class="form-group row mb-3">
                                <label for="name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="name"/>
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="email" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email"  class="form-control" id="email" placeholder="email@example.com" />
                                </div>
                            </div>
                            <div class="form-group row mb-3">
                                <label for="message" class="col-sm-2 col-form-label">Message</label>
                                <div class="col-sm-10">
                                    <textarea class="form-control" id="message" rows="3"></textarea>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-dark float-end">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            </div>
        </>
    )
}


export default Contact;