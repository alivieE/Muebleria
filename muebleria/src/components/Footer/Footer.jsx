import React from "react";
import s from "./Footer.module.css";
import images from "../../assets/index.js";

const Footer = () => {
  return (
    <div className="container">
      <div className={s.section}>
        <div className={s.logo}>
          <img src={images.footerLogo} alt="logo" />
        </div>
        <div className={s.linksContainer}>
          <a href="#" className={s.links}>
            Наші меблі
          </a>
          <a href="#" className={s.links}>
            Про нас
          </a>
          <a href="#" className={s.links}>
            Часті запитання
          </a>
          <a href="#" className={s.links}>
            Відгуки
          </a>
          <div className={s.socialIcons}>
            <img src={images.youtube} alt="youtube" />
            <img src={images.instagram} alt="instagram" />
            <img src={images.facebook} alt="facebook" />
          </div>
          <p>© 2025 Relume. Всі права захищені.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
