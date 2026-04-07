import React from "react";
import s from "./Footer.module.css";
import images from "../../assets/index.js";

const Footer = () => {
  return (
    <div>
      <div className={s.section}>
        <div className={s.logo}>
          <a href="#header">
            <img src={images.footerLogo} alt="logo" />
          </a>
        </div>
        <div></div>
        <div className={s.linksContainer}>
          <a href="#furniture" className={s.links}>
            Наші меблі
          </a>
          <a href="#aboutUs" className={s.links}>
            Про нас
          </a>
          <a href="#popular" className={s.links}>
            Популярне
          </a>
          <a href="#questions" className={s.links}>
            Часті запитання
          </a>
          <a href="#feedbacks" className={s.links}>
            Відгуки
          </a>
        </div>
        <div className={s.socialIcons}>
          <img src={images.youtube} alt="youtube" />
          <img src={images.instagram} alt="instagram" />
          <img src={images.facebook} alt="facebook" />
        </div>
        <p>© 2025 Relume. Всі права захищені.</p>
      </div>
    </div>
  );
};

export default Footer;
