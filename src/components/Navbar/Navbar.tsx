import './Navbar.css';
import Button from '../UI/Button/Button';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Button
                        className="navbar-button"
                        icons={[{ src: '/theme-change.svg', alt: 'Сменить тему' }]}
                        aria-label="Сменить тему"
                    />
                </li>
                <li>
                    <Button
                        className="navbar-button"
                        icons={[{ src: '/room.svg', alt: 'Локация' }]}
                        aria-label="Локация"
                    />
                </li>
                <li>
                    <Button
                        className="navbar-button"
                        icons={[{ src: '/user-24.svg', alt: 'Профиль' }]}
                        aria-label="Профиль"
                    />
                </li>
                <li>
                    <Button
                        className="navbar-button"
                        icons={[{ src: '/briefcase-24.svg', alt: 'Портфель' }]}
                        aria-label="Портфель"
                    />
                </li>
                <li>
                    <Button
                        className="navbar-button"
                        icons={[{ src: '/feed-24.svg', alt: 'Лента новостей' }]}
                        aria-label="Лента"
                    />
                </li>
                <li>
                    <Button
                        className="navbar-button"
                        icons={[{ src: '/apps-24.svg', alt: 'Приложения' }]}
                        aria-label="Приложения"
                    />
                </li>
                <li>
                    <Button
                        className="navbar-button"
                        icons={[{ src: '/search-16.svg', alt: 'Поиск' }]}
                        aria-label="Поиск"
                    />
                </li>
            </ul>

            <Button
                className="navbar-enter-button"
                icons={[{ src: '/enter.svg', alt: 'Вход' }]}
            >
                Личный Кабинет
            </Button>
        </nav>
    );
};

export default Navbar;
