import logo from "./logo.svg";
import close from "./close.svg";
import menu from "./menu.svg";
import heroBG from "./heroBG.svg";
import sofas from "./sofas.png";
import wardrobes from "./wardrobes.png";
import beds from "./beds.png";
import tables from "./tables.png";
import chairs from "./chairs.png";
import kitchen from "./kitchen.png";
import kids from "./kids.png";
import office from "./office.png";
import hallway from "./hallway.png";
import bathroom from "./bathroom.png";
import garden from "./garden.png";
import decor from "./decor.png";
import ALLcat from "./ALLcat.png";

const categoriesImg = {
  "all": ALLcat, // Всі товари
  "66504a50a1b2c3d4e5f6a7b8": sofas, // М'які меблі
  "66504a50a1b2c3d4e5f6a7b9": wardrobes, // Шафи та системи зберігання
  "66504a50a1b2c3d4e5f6a7ba": beds, // Ліжка та матраци
  "66504a50a1b2c3d4e5f6a7bb": tables, // Столи
  "66504a50a1b2c3d4e5f6a7bc": chairs, // Стільці та табурети
  "66504a50a1b2c3d4e5f6a7bd": kitchen, // Кухні
  "66504a50a1b2c3d4e5f6a7be": kids, // Меблі для дитячої
  "66504a50a1b2c3d4e5f6a7bf": office, // Меблі для офісу
  "66504a50a1b2c3d4e5f6a7c0": hallway, // Меблі для передпокою
  "66504a50a1b2c3d4e5f6a7c1": bathroom, // Меблі для ванної кімнати
  "66504a50a1b2c3d4e5f6a7c2": garden, // Садові та вуличні меблі
  "66504a50a1b2c3d4e5f6a7c3": decor, // Декор та аксесуари
};

export default { logo, close, menu, heroBG, ALLcat };
export { categoriesImg };
