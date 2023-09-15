import { useState } from 'react';
import logo from '../Img/Logo.png';
import navClose from '../Img/icon-close.svg'
import navOpen from '../Img/icon-menu.svg'

const Header = () => {
    const [navIcon, setNavIcon] = useState(false);
    const navToggle = () => setNavIcon(!navIcon)

    return(
        <header className="container">
            <div className='flex'>
                <a href='index.html' className='d-flex'>
                    <img className='logo' src={logo} alt='Logo'/>
                    <span className='nav_brand'>MovieBox</span>
                </a>
                <div className='input-group'>
                    <i className='input-icon fa-solid fa-magnifying-glass'></i>
                    <input className='header-input fs-400 fw-400' type='text' placeholder='What do you want to watch?'/>                
                </div>
                <div className="d-flex">
                    <span className='400'>Sign in</span>
                    <div className='nav_toggle' onClick={navToggle}><img src={navIcon ? navClose : navOpen}/></div>
                </div>
            </div>
            <nav className={`${navIcon ? 'nav_visible' : ''}`}>
                <ul className='nav_list'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Movies</a></li>
                    <li><a href='#'>Tv Series</a></li>
                    <li><a href='#'>Upcoming</a></li>
                    <li><a href='#'>Log Out</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;