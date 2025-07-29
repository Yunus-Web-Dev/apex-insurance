import './Footer.css'
import Button from '../UI/Button/Button';
const Footer = () => {
    return (
        <footer>
            <div className="socials-footer">
                <Button
                    className="apex-insurance-logo-btn"
                    icons={[
                        { src: './public/apex-insurance-logo.svg', alt: 'apex-insurance-logo', className: 'apex-insurance-logo-img' },
                    ]}
                />
                <div className="social-btns-footer">
                    <Button
                        className="apex-insurance-logo-btn"
                        icons={[
                            { src: './public/facebook.svg', alt: 'apex-insurance-logo', className: 'socials-btns-img' },
                        ]}
                    />
                    <Button
                        className="apex-insurance-logo-btn"
                        icons={[
                            { src: './public/instagram.svg', alt: 'apex-insurance-logo', className: 'socials-btns-img' },
                        ]}
                    />
                    <Button
                        className="apex-insurance-logo-btn"
                        icons={[
                            { src: './public/linkedin.svg', alt: 'apex-insurance-logo', className: 'socials-btns-img' },
                        ]}
                    />
                    <Button
                        className="apex-insurance-logo-btn"
                        icons={[
                            { src: './public/gmail.svg', alt: 'apex-insurance-logo', className: 'socials-btns-img' },
                        ]}
                    />
                </div>
            </div>
            <div className="info-for-users">
                <ul>
                    <li>Частным лицам</li>
                    <li>Бизнесу</li>
                    <li>О компании</li>
                    <li>Контакты</li>
                </ul>
                <ul>
                    <li>Личное страхование</li>
                    <li>Страхование ответственности</li>
                    <li>Страхование имущества</li>
                    <li>Автострахование</li>
                </ul>
                <ul>
                    <li>Единый портал корпоративной информации</li>
                    <li>Правительственный портал</li>
                    <li>Агенство по развитию страхового рынка</li>
                </ul>
                <ul>
                    <li>Круглосуточная связь:</li>
                    <li>+998 (71) 203 08 08</li>
                    <li>1188</li>
                    <li>Обратная связь</li>
                </ul>
            </div>
            <hr  className='line-footer'/>
            <div className='info-for-users-paragraph'>
                <p>При использовании материалов сайта ссылка на веб-сайт apexinsurance.uz обязательна. Лицензия Агентства по развитию страхового рынка при Министерстве финансов
                    Республики Узбекистан серии СФ № 00030 от 18.02.2022 года.</p>
            </div>
        </footer>
    )
}

export default Footer;