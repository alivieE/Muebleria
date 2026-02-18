import logo from "./logo.svg";
import close from "./close.svg";
import menu from "./menu.svg";
import heroBG from "./heroBG.svg";
import sofas from "./sofas.svg";
import wardrobes from "./wardrobes.svg";
import beds from "./beds.svg";
import tables from "./tables.svg";
import chairs from "./chairs.svg";
import kitchen from "./kitchen.svg";
import kids from "./kids.svg";
import office from "./office.svg";
import hallway from "./hallway.svg";
import bathroom from "./bathroom.svg";
import garden from "./garden.svg";
import decor from "./decor.svg";
import ALLcat from "./ALLcat.svg";

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
