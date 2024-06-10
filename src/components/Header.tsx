import React from 'react';
import Watch from './Watch';
import logo from '../assets/mtgLOGO.jpeg'

class Header extends React.Component {
    render() {
        return (
            <header>
                {/* Логотип или картинка */}
                <img src={logo} alt="Logo" />

                {/* Выпадающий список языков */}
                <select>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>

                {/* Компонент Watch, отображающий текущее время */}
                <Watch />
            </header>
        );
    }
}

export default Header;