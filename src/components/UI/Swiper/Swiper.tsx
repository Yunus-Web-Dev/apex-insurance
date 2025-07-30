import type { FC } from 'react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../../../../node_modules/swiper/swiper.css';
import '../../../../node_modules/swiper/modules/navigation.css';
import '../../../../node_modules/swiper/modules/pagination.css';

interface SwiperProps {
  slides: React.ReactNode[];
  className?: string;
  slidesPerView?: number; // 👈 Добавили возможность передавать количество слайдов
  breakpoints?: Record<number, { slidesPerView: number }>; // 👈 добавили кастомные брейкпоинты
}

const Swiper: FC<SwiperProps> = ({ slides, className, slidesPerView = 1, breakpoints}) => {
  return (
    <SwiperReact
      className={className}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      spaceBetween={30}
      slidesPerView={slidesPerView} // 👈 Используем переданное значение
      breakpoints={breakpoints} // 👈 используем breakpoints, если переданы
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </SwiperReact>
  );
};

export default Swiper;
