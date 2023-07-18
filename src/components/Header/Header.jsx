import './Header.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

export const Header = () => {

    return(
        <header className="header">
            <div className="header_container"> 
                <h1 className="header_logo">Music World</h1>

                <nav className="navbar">
                    <Link className="navbar_link" to="/productos">Novevdades</Link>
                    <Link className="navbar_link" to="/albums">Top</Link>
                    <Link className="navbar_link" to="/pokemon">Descubre</Link>

                </nav>
                <CartWidget/>
            </div>
        </header>
    )
};