import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

function RootLayout() {
    return (
        <>
			<div class="container-fluid">
				<NavMenu />
                <Outlet />
				<Footer />
			</div>
        </>
    )

}

export default RootLayout;