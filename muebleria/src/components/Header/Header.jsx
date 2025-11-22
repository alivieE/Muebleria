import { React, useState } from "react";
import s from "./Header.module.css";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState();
  return (
    <div>
      <nav class="hamburger-menu">
        <div class={s.burgerMenu}>
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
  );
};

export default Header;
