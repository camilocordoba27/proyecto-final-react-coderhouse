import { Link } from 'react-router-dom';
import LogoMc from '../assets/logo.svg';

const Logo = ({ tamano }) => {
    return (
        <Link to={'/'}>
            <img src={LogoMc} alt="McDonalds Argentina" width={tamano} />
        </Link>

    )
}

export default Logo;