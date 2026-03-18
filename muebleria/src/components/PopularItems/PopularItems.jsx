import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./PopularItems.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const PopularItems = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://furniture-store-v2.b.goit.study/api/furnitures?page=1&limit=10&type=popular"
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularItems(data.furnitures);
      });
  }, []);
  console.log(1);
  return (
    <div className={s.section}>
      <h2 className={s.title}>Популярні товари</h2>

      <div>
        <ul className={s.popularItem}>
          <Swiper spaceBetween={50} slidesPerView={3}>
            {popularItems.length > 0 &&
              popularItems.map((item) => (
                <SwiperSlide>
                  <li key={item.id}>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className={s.image}
                    />
                    <p>{item.name}</p>
                    <p>{item.price.toFixed(2)} грн</p>
                  </li>
                </SwiperSlide>
              ))}
          </Swiper>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default PopularItems;
