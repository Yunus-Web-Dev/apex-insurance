import './Header.css';
import Button from '../UI/Button/Button';

const Header = () => {
    return (
        <header>
            <Button
                className="apex-insurance-logo-btn"
                icons={[
                    { src: '/apex-insurance-logo.svg', alt: 'apex-insurance-logo', className: 'apex-insurance-logo-img' },
                ]}
            />

            <div className="cta-buttons">
                <Button
                    className="cta-button-terms"
                    icons={[{ src: '/terms.svg', alt: 'terms' }]}
                >
                    Оформить E-polis
                </Button>

                <Button
                    className="cta-button-union"
                    icons={[{ src: '/union.svg', alt: 'union' }]}
                >
                    Такафул
                </Button>

                <Button
                    className="cta-button-eye-lang"
                    icons={[
                        { src: '/eye.svg', alt: 'eye' },
                        { src: '/line.svg', alt: 'line' },
                        { src: '/language.svg', alt: 'language' },
                    ]}
                />

                <Button
                    className="cta-button-call-line-send"
                    icons={[{ src: '/call-24.svg', alt: 'call-24' }]}
                >
                    1188
                    <img src="/line.svg" alt="line" />
                    <img src="/send-16.svg" alt="send" />
                    Поддержка
                </Button>
            </div>
            <Button
                className='mobile-cta-button-lang-call'
                icons={[{ src: '/language.svg', alt: 'language-mobile' }]}
            >
                <img src="/line.svg" alt="line" />
                <img src='/call-24.svg' alt='call' />
                1188
            </Button>
        </header>
    );
};

export default Header;
