import './Header.css'
import { CartWidget } from '../CartWidget/CartWidget';

export const Header = () => {

    return(
        <header className="header">
            <div className="header_container"> 
                <h1 className="header_logo">Music World</h1>

                <nav className="navbar">
                    <a className="nabvar_link" href="#">Novevdades</a>
                    <a className="nabvar_link" href="#">Top</a>
                    <a className="nabvar_link" href="#">Descubre</a>

                </nav>
                <CartWidget/>
            </div>
        </header>
    )
};