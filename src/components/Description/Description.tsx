import upperQuotes from "../../img/svg/upper-quotes.svg";
import "./Description.scss";

const Description = () => (
  <div className="wrapper description">
    <img className="description__img" src={upperQuotes} alt="upper quotes" />
    <p className="description__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Egestas dui id ornare
      arcu odio ut. In nibh mauris cursus mattis molestie a iaculis at.
    </p>
  </div>
);

export default Description;
