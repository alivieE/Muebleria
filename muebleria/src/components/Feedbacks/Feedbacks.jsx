import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { render } from "react-dom";
import s from "./Feedbacks.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  useEffect(() => {
    fetch(
      "https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1",
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data.feedbacks);
      });
  }, []);
  console.log(feedbacks);

  return (
    <div className="container">
      <div className={s.feedbacks}>
        <p className={s.title}>Відгуки клієнтів</p>
        <p className={s.info}>
          Дізнайтеся, що кажуть наші задоволені клієнти про нашу меблі.
        </p>
        <Swiper
          className="userFeedbackSwiper"
          spaceBetween={50}
          slidesPerView={3}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {feedbacks.length > 0 &&
            feedbacks.map((fb) => (
              <SwiperSlide className="userFeedback">
                <li key={fb.id}>
                  <div className={s.feedback}>
                    <ReactStars
                      count={5}
                      value={fb.rate}
                      size={24}
                      edit={false}
                      color1={"#d3d3d3"}
                      color2={"#000000"}
                    />
                    <p className={s.name}>{fb.name}</p>
                    <p className={s.descr}>{fb.descr}</p>
                  </div>
                </li>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedbacks;
