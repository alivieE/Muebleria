import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero";
import FurnitureList from "./components/FurnitureList/FurnitureList.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Questions from "./components/Questions/Questions.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PopularItems from "./components/PopularItems/PopularItems.jsx";
import Feedbacks from "./components/Feedbacks/Feedbacks.jsx";
import setModalOrder from './components/FurnitureList/ModalOrder/ModalOrder.jsx'

function App() {
  return (
    <div className="App">
      <Header setModalOrder={setModalOrder}></Header>
      <Hero></Hero>
      <FurnitureList></FurnitureList>
      <AboutUs></AboutUs>
      <PopularItems></PopularItems>
      <Questions></Questions>
      <Feedbacks></Feedbacks>
      <Footer></Footer>
    </div>
  );
}

export default App;
