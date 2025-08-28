import './NavMenu.css';
import NavItem from "./NavItem";
import NavLogo from '../assets/maxplogo-v2.png';

function NavMenu() {
	const items = [
		{ id: "nav-1", name: "Home", url: "/" },
		{ id: "nav-2", name: "Lessons & Rates", url: "/rates" },
		{ id: "nav-3", name: "5 Hour Class", url: "/5-hour-class" },
		{ id: "nav-4", name: "Contact", url: "/contact" }
	]
	return (
		<>
			<div className="row nav-bg sticky-top">
				<div className="container-1200 m-auto">
					<nav className="my-3 navbar navbar-expand-lg">
						<div className="container-fluid">
							<a className="navbar-brand text-color-yellow nav-logo" href="/">
								<img src={NavLogo} alt="driving school logo" />
							</a>
							<button className="navbar-toggler nav-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>

							<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
								{items.map( (i)=> <NavItem key={i.id} name={i.name} url={i.url}/> )}
							</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	)

}

export default NavMenu;