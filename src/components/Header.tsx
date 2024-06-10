import React from 'react';
import Watch from './Watch';
import logo from '../assets/logo-1x.png'

class Header extends React.Component {
    render() {
        return (
            <header>           
                <img src={logo} alt="Logo" />
                <Watch />
                <select>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
            </header>
        );
    }
}

export default Header;