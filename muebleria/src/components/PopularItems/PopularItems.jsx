import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import s from "./PopularItems.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const PopularItems = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://furniture-store-v2.b.goit.study/api/furnitures?page=1&limit=10&type=popular",
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularItems(data.furnitures);
      });
  }, []);
  console.log(1);
  return (
    <div className="container">
      <div className={s.section}>
        <h2 className={s.title}>Популярні товари</h2>

        <div>
          <ul className={s.popularItem}>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
            >
              {popularItems.length > 0 &&
                popularItems.map((item) => (
                  <SwiperSlide>
                    <li key={item.id}>
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className={s.image}
                      />
                      <div className={s.info}>
                        <p className={s.name}>{item.name}</p>
                        <div className={s.colorContainer}>
                          {item.color.map((color, index) => (
                            <div
                              key={index}
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                                backgroundColor: color,
                                border: "1px solid #ccc",
                              }}
                            />
                          ))}
                        </div>
                        <p className={s.price}>{item.price.toFixed(2)} грн</p>
                      </div>
                    </li>
                  </SwiperSlide>
                ))}
            </Swiper>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PopularItems;
