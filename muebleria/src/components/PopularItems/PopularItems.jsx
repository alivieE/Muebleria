import React, { useEffect, useState, useRef, useCallback } from "react";
import s from "./PopularItems.module.css";

const GAP = 24;

const getPerView = () => {
  if (window.innerWidth >= 1440) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const PopularItems = () => {
  const [popularItems, setPopularItems] = useState([]);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(getPerView);
  const trackRef = useRef(null);

  useEffect(() => {
    fetch(
      "https://furniture-store-v2.b.goit.study/api/furnitures?page=1&limit=10&type=popular"
    )
      .then((res) => res.json())
      .then((data) => setPopularItems(data.furnitures));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setPerView(getPerView());
      setCurrent(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    const viewportWidth = trackRef.current.parentElement.offsetWidth;
    const slideWidth =
      perView === 1
        ? 335
        : (viewportWidth - GAP * (perView - 1)) / perView;
    const offset = current * (slideWidth + GAP);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  }, [current, popularItems, perView]);

  const maxIndex = Math.max(popularItems.length - perView, 0);

  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(c + 1, maxIndex)),
    [maxIndex]
  );

  return (
    <div className="container" id="popular">
      <div className={s.section}>
        <h2 className={s.title}>Популярні товари</h2>

        <div className={s.sliderOuter}>
          <button
            className={`${s.navBtn} ${s.prev}`}
            onClick={prev}
            disabled={current === 0}
            aria-label="Попередній"
          >
            ‹
          </button>

          <div className={s.viewport}>
            <ul className={s.track} ref={trackRef}>
              {popularItems.map((item) => (
                <li key={item.id} className={s.slide}>
                  <div className={s.card}>
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
                            className={s.colorDot}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <p className={s.price}>{item.price.toFixed(2)} грн</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <button
            className={`${s.navBtn} ${s.next}`}
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Наступний"
          >
            ›
          </button>
        </div>

        <div className={s.pagination}>
          {popularItems.slice(0, popularItems.length - perView + 1).map((_, i) => (
            <button
              key={i}
              className={`${s.dot} ${i === current ? s.active : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Товар ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularItems;