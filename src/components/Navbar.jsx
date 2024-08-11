import './styles/Navbar.css';

import {
    Link,
} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to='/'><button className='navbar__button'>🏠</button></Link>
        </div>
    )
}

export default Navbar;