import { React, useState } from "react";
import s from "./Header.module.css";
import images from "../../assets/index.js";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header className={isOpenMenu ? `${s.header} ${s.overflow}` : s.header}>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.logo}>
            <img src={images.logo} alt="logo" />
          </div>
          <nav class="nav">
            <button
              className={s.menuAndClose}
              onClick={() => {
                setIsOpenMenu(true);
              }}
            >
              <img src={images.menu} />
            </button>

            <div className={s.desktopMenu}>
              <ul class={s.menuItems}>
                <li>
                  <a href="#">Наші меблі</a>
                </li>

                <li>
                  <a href="#">Про нас</a>
                </li>

                <li>
                  <a href="#">Часті запитання</a>
                </li>

                <li>
                  <a href="#">Відгуки</a>
                </li>
              </ul>
              <button>
                <a href="#">До покупок</a>
              </button>
            </div>
          </nav>
        </div>
      </div>
      {isOpenMenu && (
        <div
          className={isOpenMenu ? `${s.burgerMenu} ${s.open}` : s.burgerMenu}
        >
          <div className={s.logo}>
            <img src="#" alt="logo" />
          </div>
          <button
            className={s.menuAndClose}
            onClick={() => {
              setIsOpenMenu(false);
            }}
          >
            <img src={images.close} />
          </button>
          <ul class={s.menuItems}>
            <li>
              <a href="#">Наші меблі</a>
            </li>

            <li>
              <a href="#">Про нас</a>
            </li>

            <li>
              <a href="#">Часті запитання</a>
            </li>

            <li>
              <a href="#">Відгуки</a>
            </li>
          </ul>
          <button>
            <a href="#">До покупок</a>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
