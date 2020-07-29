import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { Button } from '../Button';
import './menu.css';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="DevTipsFlix"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu;