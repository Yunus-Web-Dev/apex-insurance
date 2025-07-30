import Swiper from "../../components/UI/Swiper/Swiper";
import Photo from "../../components/UI/Photo/Photo";
import Span from "../../components/UI/Span/Span";
import Button from "../../components/UI/Button/Button";
import Heading from "../../components/UI/Heading/Heading";
import { Switch } from "../../components/UI/Switch/Switch";
import './MainPage.css'
const MainPage = () => {
    const slides = [
        <div className="slide-content">
            <Photo src="/public/slide-1.jpg" alt="Slide 1" className="slide-1-img" />
            <div className="read-more-container">
                <Span children='Страхование ответственности' />
                <Heading level={2} children='Оформите ОСГО ВТС онлайн' className="slide-heading"/>
                <Span children='И получите ссылку на E-polis по смс' />
                <Button
                    className="read-more"
                    icons={[{ src: '/public/arrow-right.svg', alt: 'terms' }]}
                >
                    Подробнее
                </Button>
            </div>
        </div>,
        <div className="slide-content">
            <Photo src="/public/slide-2.png" alt="Slide 2" className="slide-2-img" />
            <div className="read-more-container">
                <Span children='Страхование ответственности' />
                <Heading level={2} children='Оформите ОСГО ВТС онлайн'  className="slide-heading"/>
                <Span children='И получите ссылку на E-polis по смс' />
                <Button
                    className="read-more"
                    icons={[{ src: '/public/arrow-right.svg', alt: 'terms' }]}
                >
                    Подробнее
                </Button>
            </div>
        </div>,
        <div className="slide-content">
            <Photo src="/public/slide-3.png" alt="Slide 3" className="slide-3-img" />
            <div className="read-more-container">
                <Span children='Страхование ответственности' />
                <Heading level={2} children='Оформите ОСГО ВТС онлайн'  className="slide-heading"/>
                <Span children='И получите ссылку на E-polis по смс' />
                <Button
                    className="read-more"
                    icons={[{ src: '/public/arrow-right.svg', alt: 'terms' }]}
                >
                    Подробнее
                </Button>
            </div>
        </div>
    ];
    return (
        <>
            <section className="slider-wrapper">
                <Swiper slides={slides} />
            </section>
            <section className='recommended-products'>
                <div className="recommended-products-controller">
                    <Heading children='Рекомендуемые продукты' level={2} />
                    <div className="switch-container">
                        <Heading children="Частным лицам" level={3} />
                        <Switch />
                    </div>
                    <Button
                        className="read-more"
                        icons={[{ src: '/public/arrow-black.svg', alt: 'terms' }]}
                    >
                        Все продукты
                    </Button>
                </div>
            </section>
        </>
    )
}

export default MainPage;