import React, { useEffect, useState, useRef, useCallback } from "react";
import ReactStars from "react-stars";
import s from "./Feedbacks.module.css";

const GAP = 24;

const getPerView = () => {
  if (window.innerWidth >= 1440) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(getPerView);
  const trackRef = useRef(null);

  useEffect(() => {
    fetch("https://furniture-store-v2.b.goit.study/api/feedbacks?limit=10&page=1")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data.feedbacks));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newPerView = getPerView();
      setPerView(newPerView);
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
  }, [current, feedbacks, perView]);

  const maxIndex = Math.max(feedbacks.length - perView, 0);

  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(c + 1, maxIndex)),
    [maxIndex]
  );

  return (
    <div className="container" id="feedbacks">
      <div className={s.feedbacks}>
        <p className={s.title}>Відгуки клієнтів</p>
        <p className={s.info}>
          Дізнайтеся, що кажуть наші задоволені клієнти про наші меблі.
        </p>

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
              {feedbacks.map((fb) => (
                <li key={fb.id} className={s.slide}>
                  <div className={s.feedback}>
                    <ReactStars
                      count={5}
                      value={fb.rate}
                      size={24}
                      edit={false}
                      color1="#d3d3d3"
                      color2="#000000"
                    />
                    <p className={s.name}>{fb.name}</p>
                    <p className={s.descr}>{fb.descr}</p>
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
          {feedbacks.slice(0, feedbacks.length - perView + 1).map((_, i) => (
            <button
              key={i}
              className={`${s.dot} ${i === current ? s.active : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Відгук ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;