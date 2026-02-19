import React, { useState, useEffect } from "react";
import s from "./ModalFurniture.module.css";
import images from "../../../assets/index.js";
import ModalOrder from "../ModalOrder/ModalOrder.jsx";
import ReactStars from "react-stars";

const ModalFurniture = ({ id, setModalOpen }) => {
  const [furniture, setFurniture] = useState();
  const [selectedColor, setSelectedColor] = useState(null);
  const [modalOrder, setModalOrder] = useState(false);

  useEffect(() => {
    fetch(`https://furniture-store-v2.b.goit.study/api/furnitures/${id}`, {})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFurniture(data);
      });
  }, [id]);

  useEffect(() => {
    if (selectedColor) {
      console.log(selectedColor);
    }
  }, [selectedColor]);

  return (
    <>
      <div
        className={`${s.overlay} del`}
        onClick={(e) => {
          if (e.target.classList.contains("del")) {
            setModalOpen(false);
            document.body.style.overflow = "auto";
          }
        }}
      >
        {furniture && (
          <div className={s.section}>
            <div className={s.infoSection}>
              <div className={s.strImgWrap}>
                {furniture.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className={s.furnitureImg}
                    alt={furniture.name}
                  />
                ))}
              </div>
              <div className={s.infoWrap}>
                <p className={s.infoTitle}>{furniture.name}</p>
                <p className={s.type}>{furniture.type}</p>
                <p className={s.price}>{furniture.price} грн</p>
                <div className={s.rate}>
                  <ReactStars
                    count={5}
                    value={furniture.rate}
                    size={24}
                    color2={"black"}
                    color1={"#adadad"}
                    borderColor={"black"}
                  />
                </div>
                <div>
                  <p>Колір</p>
                  <div className={s.colorSection}>
                    {furniture.color.map((color, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          backgroundColor: color,
                          border:
                            selectedColor === color
                              ? "3px solid #000"
                              : "1px solid #ccc",
                          cursor: "pointer",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className={s.description}>{furniture.description}</p>
                <p className={s.sizes}>{furniture.sizes}</p>
                <button
                  onClick={() => {
                    setModalOrder(!modalOrder);
                  }}
                  className={s.orderBtn}
                >
                  Перейти до замовлення
                </button>
              </div>
            </div>
            <button
              className={s.close}
              onClick={() => {
                setModalOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              <img src={images.close} />
            </button>
          </div>
        )}
      </div>
      {modalOrder && (
        <ModalOrder
          selectedColor={selectedColor}
          furniture={furniture}
          onClose={() => setModalOrder(false)}
        />
      )}
    </>
  );
};

export default ModalFurniture;
