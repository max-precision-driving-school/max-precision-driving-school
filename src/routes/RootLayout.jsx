import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";
import { useEffect } from 'react';

function RootLayout() {
    useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);

    return (
        <>
			<div className="container-fluid">
				<NavMenu />
                <Outlet />
				<Footer />
			</div>
        </>
    )

}

export default RootLayout;