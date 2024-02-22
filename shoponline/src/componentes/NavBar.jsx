import Logo from './Logo'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <Logo tamano={120} />
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname= 'active' to={'/'}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname= 'active' to={'/category/zapatillas'}>Zapatillas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname= 'active' to={'/category/remeras'}>Remeras</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname= 'active' to={'/category/pantalones'}>Pantalones</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fs-5" activeclassname= 'active' to={'/category/buzos'}>Buzos</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;