import React, { useState, useEffect } from "react";
import s from "./ModalOrder.module.css";
import images from "../../../assets/index.js";

const ModalOrder = ({ onClose, selectedColor, furniture, setModalOrder }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleComment(e) {
    setMessage(e.target.value);
  }
  return (
    <>
      <div
        className={`${s.overlay} del`}
        onClick={(e) => {
          if (e.target.classList.contains("del")) {
            onClose();
            document.body.style.overflow = "auto";
          }
        }}
      >
        <div className={s.section}>
          <p className={s.orderTitle}>Замовити</p>
          <form>
            <div className={s.inputBlock}>
              <p>Ім'я*</p>
              <input
                required
                type="text"
                className={s.input}
                name="name"
                value={name}
                title="Введіть повне ім'я (латиниця/кирилиця)"
                placeholder="Дмитро"
                minLength={2}
                onChange={handleName}
              ></input>
            </div>
            <div className={s.inputBlock}>
              <p>Телефон*</p>
              <input
                required
                type="text"
                className={s.input}
                name="phone"
                value={phone}
                title="Введіть номер телефону у форматі: 38 099 123 22 11"
                placeholder="38 099 123 22 11"
                minLength={2}
                onChange={handlePhone}
              ></input>
            </div>
            <div className={s.inputBlock}>
              <p>Коментар</p>
              <textarea
                required
                className={s.textarea}
                name="message"
                value={message}
                title="Введіть ваш коментар"
                placeholder="Ваш коментар.."
                minLength={0}
                onChange={handleComment}
              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            className={s.orderBtn}
            onClick={() => {
              setModalOrder(false)
            }}
          >
            Надіслати заявку
          </button>
          <button
            className={s.close}
            onClick={() => {
              onClose();
              document.body.style.overflow = "auto";
            }}
          >
            <img src={images.close} />
          </button>
        </div>
      </div>
    </>
  );
};

export default ModalOrder;
