import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle'
export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div style={{color:"#000"}}>
            HELLO
        </div>
        <div>
            HELLO
        </div>
        <div>
            HELLO
        </div>
        <div>
            HELLO
        </div>
        <div>
            HELLO
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            HELLO
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            HELLO
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
            HELLO
        </div>
      </SwiperSlide>
    </Swiper>
  );
}