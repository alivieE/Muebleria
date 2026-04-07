import React, { useState } from "react";
import s from "./Questions.module.css";
import images from "../../assets/index.js";

const faqData = [
  {
    id: 1,
    question: "Як здійснюється доставка меблів?",
    answer:
      "Ми доставляємо замовлення по всій Україні через надійні служби. Термін доставки зазвичай складає 3–7 днів залежно від регіону.",
  },
  {
    id: 2,
    question: "Чи є можливість вибрати колір або матеріал?",
    answer:
      "Так, у багатьох моделях доступні варіанти оббивки та кольорів. Усі доступні опції вказані на сторінці товару.",
  },
  {
    id: 3,
    question: "Чи можна повернути товар, якщо він не підійшов?",
    answer:
      "Так, ви можете повернути товар протягом 14 днів, якщо він не був у користуванні та збережений у первинному вигляді.",
  },
  {
    id: 4,
    question: "Чи надаєте ви послугу збирання меблів?",
    answer:
      "Так, під час оформлення замовлення можна обрати послугу збирання. Наші майстри зберуть меблі у зручний для вас час.",
  },
  {
    id: 5,
    question: "Як здійснити оплату?",
    answer:
      "Ми приймаємо оплату карткою онлайн, банківським переказом або післяплатою при отриманні.",
  },
];

const Questions = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container" id="questions">
      <div className={s.questions}>
        <p className={s.title}>Часті питання</p>
        <ul className={s.list}>
          {faqData.map((item) => (
            <li key={item.id} className={s.item}>
              <div className={s.questionWrap}>
                <span className={s.question}>{item.question}</span>
                <span className={s.icon} onClick={() => toggle(item.id)}>
                  <img
                    className={`${s.iconImg} ${openId === item.id ? s.iconRotated : ""}`}
                    src={images.questionClosed}
                    alt="toggle"
                  />
                </span>
              </div>
              <div
                className={`${s.answerWrap} ${openId === item.id ? s.answerOpen : ""}`}
              >
                <p className={s.answer}>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
