import Meta from '../components/Meta';
import './RefundPolicy.css';

function RefundPolicy() {
    return (
        <>
		 	<Meta
				title="Refund Policy| Max Precision Driving School "
				description="Lessons should be cancelled within 24 hours of the appointed time (business days, not including weekends) ..."
			/>
            <div className="row py-4 refund-policy-bg">
                <div className="container-1200 m-auto">
                    <div className="col-12 my-4">
                        <h2 className="my-2 text-center pt-serif-bold text-light">Refund Policy</h2>
                    </div>

                    <div className="col-12 pt-serif-regular">
                        <p className="mb-5 text-light">To all previous and new students:</p>
                    </div>

                    <div className="col-12">
                        <h4 className="pt-serif-bold text-light">Cancellations</h4>
                        <p className="my-3 pt-serif-regular text-light">
                            Lessons should be cancelled within 24 hours of the appointed time (business days, not including weekends).
                        </p>
                    </div>

                    <div className="col-12 mt-5 pb-5">
                        <h4 className="pt-serif-bold text-light">Refunds</h4>
                        <p className="my-3 pt-serif-regular text-light">
                            Road test appointments and car rentals are non-refundable.
                        </p>
                        <p className="pt-serif-regular text-light">
                            Students will need to complete their driver licensing process within 3 months. Lessons that are not completed within the 3 month period will be terminated and <strong>non-refundable</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};


export default RefundPolicy;