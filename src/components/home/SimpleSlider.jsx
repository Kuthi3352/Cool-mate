import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../../styles/home/SimpleSlider.css"
function SimpleSlider() {
  return (
    <div className="slider-container">
    <Swiper
  modules={[ Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay: 3500,
      }}
     
    >
      <SwiperSlide><img src="/images/muahe.png" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/ship.png" alt="" /></SwiperSlide>
      
    
      
    </Swiper>
    </div>
  );
}

export default SimpleSlider;
