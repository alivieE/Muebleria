import { React, useState } from "react";
import s from "./Header.module.css";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header>
      <div className="container">
        <div className={s.logo}>
          <img src="#" alt="logo" />
        </div>
        <nav class="nav">
          <button
            onClick={() => {
              setIsOpenMenu(true);
            }}
          >
            change
          </button>
          {isOpenMenu && (
            <div class={s.burgerMenu}>
              <div className={s.logo}>
                <img src="#" alt="logo" />
              </div>
              <button className={s.close}>x</button>
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
    </header>
  );
};

export default Header;
