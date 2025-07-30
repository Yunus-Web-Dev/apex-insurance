import Swiper from "../../components/UI/Swiper/Swiper";
import Photo from "../../components/UI/Photo/Photo";
import Span from "../../components/UI/Span/Span";
import Button from "../../components/UI/Button/Button";
import Heading from "../../components/UI/Heading/Heading";
import { Switch } from "../../components/UI/Switch/Switch";
import { Paragraph } from "../../components/UI/Paragraph/Paragraph";
import './MainPage.css'
const MainPage = () => {
    const slides = [
        <div className="slide-content">
            <Photo src="/public/slide-1.jpg" alt="Slide 1" className="slide-1-img" />
            <div className="read-more-container">
                <Span children='Страхование ответственности' />
                <Heading level={2} children='Оформите ОСГО ВТС онлайн' className="slide-heading" />
                <Span children='И получите ссылку на E-polis по смс' />
                <Button
                    className="read-more"
                    icons={[{ src: '/arrow-right.svg', alt: 'terms' }]}
                >
                    Подробнее
                </Button>
            </div>
        </div>,
        <div className="slide-content">
            <Photo src="/public/slide-2.png" alt="Slide 2" className="slide-2-img" />
            <div className="read-more-container">
                <Span children='Страхование ответственности' />
                <Heading level={2} children='Оформите ОСГО ВТС онлайн' className="slide-heading" />
                <Span children='И получите ссылку на E-polis по смс' />
                <Button
                    className="read-more"
                    icons={[{ src: '/arrow-right.svg', alt: 'terms' }]}
                >
                    Подробнее
                </Button>
            </div>
        </div>,
        <div className="slide-content">
            <Photo src="/public/slide-3.png" alt="Slide 3" className="slide-3-img" />
            <div className="read-more-container">
                <Span children='Страхование ответственности' />
                <Heading level={2} children='Оформите ОСГО ВТС онлайн' className="slide-heading" />
                <Span children='И получите ссылку на E-polis по смс' />
                <Button
                    className="read-more"
                    icons={[{ src: '/arrow-right.svg', alt: 'terms' }]}
                >
                    Подробнее
                </Button>
            </div>
        </div>
    ];

    const slides2 = [
        <div className="reccomended-products-block">
            <Photo src="reccomend-product-1.jpg" alt="reccomend-product-1" />
            <div className="reccomend-product-desc">
                <Heading level={2} children='Страхование туристов' />
                <Span children='Личное страхование' />
                <Paragraph className="" children='Lorem ipsum dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.' />
            </div>
            <Photo src="line-reccomend.svg" alt="reccomend-line" className="reccomend-line" />
            <div className="cta-more-info">
                <Button
                    className="cta-more-info-btn-tr"
                >
                    Оформить полис
                </Button>
                <Button
                    className="cta-more-info-btn-bg"
                >
                    Подробнее
                </Button>
            </div>
        </div>,
        <div className="reccomended-products-block">
            <Photo src="reccomend-product-1.jpg" alt="reccomend-product-1" />
            <div className="reccomend-product-desc">
                <Heading level={2} children='Страхование туристов' />
                <Span children='Личное страхование' />
                <Paragraph className="" children='Lorem ipsum dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.' />
            </div>
            <Photo src="line-reccomend.svg" alt="reccomend-line" className="reccomend-line" />
            <div className="cta-more-info">
                <Button
                    className="cta-more-info-btn-tr"
                >
                    Оформить полис
                </Button>
                <Button
                    className="cta-more-info-btn-bg"
                >
                    Подробнее
                </Button>
            </div>
        </div>,
        <div className="reccomended-products-block">
            <Photo src="/reccomend-product-1.jpg" alt="reccomend-product-1" />
            <div className="reccomend-product-desc">
                <Heading level={2} children='Страхование туристов' />
                <Span children='Личное страхование' />
                <Paragraph className="" children='Lorem ipsum dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.' />
            </div>
            <Photo src="line-reccomend.svg" alt="reccomend-line" className="reccomend-line" />
            <div className="cta-more-info">
                <Button
                    className="cta-more-info-btn-tr"
                >
                    Оформить полис
                </Button>
                <Button
                    className="cta-more-info-btn-bg"
                >
                    Подробнее
                </Button>
            </div>
        </div>,
        <div className="reccomended-products-block">
            <Photo src="/reccomend-product-1.jpg" alt="reccomend-product-1" />
            <div className="reccomend-product-desc">
                <Heading level={2} children='Страхование туристов' />
                <Span children='Личное страхование' />
                <Paragraph className="" children='Lorem ipsum dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.' />
            </div>
            <Photo src="line-reccomend.svg" alt="reccomend-line" className="reccomend-line" />
            <div className="cta-more-info">
                <Button
                    className="cta-more-info-btn-tr"
                >
                    Оформить полис
                </Button>
                <Button
                    className="cta-more-info-btn-bg"
                >
                    Подробнее
                </Button>
            </div>
        </div>,
        <div className="reccomended-products-block">
            <Photo src="/reccomend-product-1.jpg" alt="reccomend-product-1" />
            <div className="reccomend-product-desc">
                <Heading level={2} children='Страхование туристов' />
                <Span children='Личное страхование' />
                <Paragraph className="" children='Lorem ipsum dolor sit amet consectetur. Tortor ipsum sed natoque sed elit ut eget vitae.' />
            </div>
            <Photo src="line-reccomend.svg" alt="reccomend-line" className="reccomend-line" />
            <div className="cta-more-info">
                <Button
                    className="cta-more-info-btn-tr"
                >
                    Оформить полис
                </Button>
                <Button
                    className="cta-more-info-btn-bg"
                >
                    Подробнее
                </Button>
            </div>
        </div>,
    ]
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
                        icons={[{ src: '/arrow-black.svg', alt: 'terms' }]}
                    >
                        Все продукты
                    </Button>
                </div>
                <div className="reccomended-products-blocks">
                    <Swiper slides={slides2} slidesPerView={4} breakpoints={{
                        0: { slidesPerView: 1 },      // 👈 от 0 до 499 — 1 слайд
                        500: { slidesPerView: 2 },    // 👈 от 500 до 767 — 2
                        768: { slidesPerView: 2 },    // 👈 от 768 до 1279 — 2
                        1280: { slidesPerView: 3 },   // 👈 от 1280 до 1919 — 3
                        1920: { slidesPerView: 4 },   // 👈 от 1920 и выше — 4
                    }} />
                </div>
            </section>
        </>
    )
}

export default MainPage;