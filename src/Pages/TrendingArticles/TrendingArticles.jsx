import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const TrendingArticles = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          vitae laboriosam inventore nesciunt dicta velit eligendi saepe
          cupiditate minima reprehenderit!
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          vitae laboriosam inventore nesciunt dicta velit eligendi saepe
          cupiditate minima reprehenderit!
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrendingArticles;
