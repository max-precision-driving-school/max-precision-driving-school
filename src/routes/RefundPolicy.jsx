import Meta from '../components/Meta';

function RefundPolicy() {
    return (
        <>
		 	<Meta
				title="Refund Policy| Max Precision Driving School "
				description="Lessons should be cancelled within 24 hours of the appointed time (business days, not including weekends) ..."
			/>
            <div className="row py-4 refund-policy">
                <div className="container-1200 m-auto">
                    <div className="col-12">
                        <h2 className="my-2">Refund Policy</h2>
                    </div>
                </div>
            </div>

            <div className="row py-5">
                <div className="container-1200 pb-5 m-auto">
                    <div className="col-12 pt-serif-regular">
                        <p className="mb-5">To all previous and new students:</p>
                    </div>

                    <div className="col-12">
                        <h4 className="pt-serif-bold">Cancellations</h4>
                        <p className="my-3 pt-serif-regular">
                            Lessons should be cancelled within 24 hours of the appointed time (business days, not including weekends).
                        </p>
                    </div>

                    <div className="col-12 mt-5 pb-5">
                        <h4 className="pt-serif-bold">Refunds</h4>
                        <p className="my-3 pt-serif-regular">
                            Road test appointments and car rentals are non-refundable.
                        </p>
                        <p className="pt-serif-regular">
                            Students will need to complete their driver licensing process within 3 months. Lessons that are not completed within the 3 month period will be terminated and <strong>non-refundable</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};


export default RefundPolicy;