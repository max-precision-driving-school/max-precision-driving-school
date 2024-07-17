import './NavMenu.css';
import NavItem from "./NavItem";
// import NavLogo from '../assets/maxplogo-v2-1.png';
import NavLogo from '../assets/maxplogo-v3.png';

function NavMenu() {
	const items = [
		{ id: "nav-1", name: "Home", url: "/" },
		{ id: "nav-2", name: "Lessons & Rates", url: "/rates" },
		{ id: "nav-3", name: "5 Hour Class", url: "/5-hour-class" },
		{ id: "nav-4", name: "Contact", url: "/contact" }
	]
	return (
		<>
			<div class="row nav-bg">
				<div class="container-1200 m-auto">
					<nav class="my-3 navbar navbar-expand-lg">
						<div class="container-fluid">
							<a class="navbar-brand text-color-yellow nav-logo" href="/">
								<img src={NavLogo} alt="driving school logo" />
							</a>
							<button class="navbar-toggler nav-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>

							<div class="collapse navbar-collapse" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-end">
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