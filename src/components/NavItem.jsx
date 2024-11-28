import './NavItem.css';

function NavItem({ name, url }) {
    return(
        <>
            <li className="nav-item mx-0 mx-md-2">
                <a className="nav-link py-2 n-item text-center mt-2 mt-lg-0" href={url}>{name}</a>
            </li>
        </>
    )
}

export default NavItem;