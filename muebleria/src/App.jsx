import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero";
import FurnitureList from "./components/FurnitureList/FurnitureList.jsx";
import Categories from "./components/FurnitureList/Categories/Categories.jsx";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <FurnitureList></FurnitureList>
    </div>
  );
}

export default App;
