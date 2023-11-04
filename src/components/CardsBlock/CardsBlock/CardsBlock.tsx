import { useEffect, useState } from "react";
import { CARDS_LIST, MAIN_TITLE } from "../../../constants/card";
import Card from "../Card/Card";
import "./CardsBlock.scss";
import { ICard } from "../../../types";
import { useResize } from "../../../hooks/useResize";

const CardsBlock = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const { isScreenLg } = useResize();

  useEffect(() => {
    setCards(isScreenLg ? CARDS_LIST : CARDS_LIST.slice(0, 3));
  }, [isScreenLg]);

  return (
    <section className="wrapper card-block">
      <h1 className="card-block__title">{MAIN_TITLE}</h1>
      <div className="card-block__section">
        {cards.map((item) => (
          <Card key={item.alt} card={item} />
        ))}
      </div>
    </section>
  );
};

export default CardsBlock;
