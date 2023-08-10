import './Header.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

export const Header = () => {

    return(
        <header className="header">
            <div className="header_container"> 
                <Link className="header_logo" to="/">Store 4 All</Link>

                <nav className="navbar">
                    <Link className="navbar_link" to="/productos/electronics">Electronics</Link>
                    <Link className="navbar_link" to="/productos/jewelery">Jewelery</Link>
                    <Link className="navbar_link" to="/productos/men's clothing">Men's Clothing</Link>
                    <Link className="navbar_link" to="/productos/women's clothing">Women's Clothing</Link>

                </nav>
                <CartWidget/>
            </div>
        </header>
    )
};