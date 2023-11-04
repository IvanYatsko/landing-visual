import "./App.scss";
import CardsBlock from "./components/CardsBlock/CardsBlock/CardsBlock";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Slider />
        <Description />
      </main>
      <CardsBlock />
    </div>
  );
};

export default App;
