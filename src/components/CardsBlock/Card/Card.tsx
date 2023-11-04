import { TITLE } from "../../../constants/card";
import { CardProps } from "../../../types";
import "./Card.scss";

const Card = ({ card }: CardProps) => {
  const { alt, src, text } = card;

  return (
    <div className="card">
      <img className="card__img" src={src} alt={alt} />
      <h3 className="card__title">{TITLE}</h3>
      <p className="card__text">{text}</p>
    </div>
  );
};

export default Card;
