import './NavItem.css';

function NavItem({ name, url }) {
    return(
        <>
            <li id="parm" class="nav-item">
                <a class="nav-link py-2 n-item text-center mt-2 mt-lg-0" href={url}>{name}</a>
            </li>
        </>
    )
}

export default NavItem;