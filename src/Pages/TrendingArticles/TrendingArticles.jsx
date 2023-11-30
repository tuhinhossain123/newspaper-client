import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrendingArticles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://newspaper-server-ten.vercel.app/allArticles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return (
    <div className="mb-10">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-[95%] mx-auto -z-10"
      >
        {articles?.slice(0, 6).map((article) => (
          <SwiperSlide key={article._id} className="">
            <div
              className="h-[30rem] flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${article.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div>
                <h2 className="text-white text-5xl font-bold m-5 text-center">
                  {article.title}
                </h2>
                <p className="text-white px-16 text-center">
                  {article.description.slice(0, 500)}....
                </p>
                <div className="flex justify-center py-2">
                  <Link
                    className="bg-[#02a388] py-2 px-2 text-white font-semibold rounded-md"
                    to="allArticles"
                  >
                    See More...
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingArticles;
