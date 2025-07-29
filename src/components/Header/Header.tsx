import './Header.css';
import Button from '../UI/Button/Button';

const Header = () => {
    return (
        <header>
            <Button
                className="apex-insurance-logo-btn"
                icons={[
                    { src: './public/apex-insurance-logo.svg', alt: 'apex-insurance-logo', className: 'apex-insurance-logo-img' },
                ]}
            />

            <div className="cta-buttons">
                <Button
                    className="cta-button-terms"
                    icons={[{ src: './public/terms.svg', alt: 'terms' }]}
                >
                    Оформить E-polis
                </Button>

                <Button
                    className="cta-button-union"
                    icons={[{ src: './public/union.svg', alt: 'union' }]}
                >
                    Такафул
                </Button>

                <Button
                    className="cta-button-eye-lang"
                    icons={[
                        { src: './public/eye.svg', alt: 'eye' },
                        { src: './public/line.svg', alt: 'line' },
                        { src: './public/language.svg', alt: 'language' },
                    ]}
                />

                <Button
                    className="cta-button-call-line-send"
                    icons={[{ src: './public/call-24.svg', alt: 'call-24' }]}
                >
                    1188
                    <img src="./public/line.svg" alt="line" />
                    <img src="./public/send-16.svg" alt="send" />
                    Поддержка
                </Button>
            </div>
            <Button
                className='mobile-cta-button-lang-call'
                icons={[{ src: './public/language.svg', alt: 'language-mobile' }]}
            >
                <img src="./public/line.svg" alt="line" />
                <img src='./public/call-24.svg' alt='call' />
                1188
            </Button>
        </header>
    );
};

export default Header;
