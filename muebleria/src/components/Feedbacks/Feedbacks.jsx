import React, { useEffect, useState } from "react";
import s from "./Feedbacks.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(
      "https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1"
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
        <Swiper className="userFeedbackSwiper"
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
                    <p>{fb.rate}</p>
                    <p className={s.name}>{fb.name}</p>
                    <p className={s.date}>{fb.date}</p>
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
