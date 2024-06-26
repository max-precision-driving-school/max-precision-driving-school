import './NavItem.css';

function NavItem({ name, url }) {
    return(
        <>
            <li id="parm" class="nav-item">
                <a class="nav-link py-2 n-item" href={url}>{name}</a>
            </li>
        </>
    )
}

export default NavItem;