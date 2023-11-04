import { BurgerProps } from "../../types";
import "./Burger.scss";

const Burger = ({ changeVisible, open }: BurgerProps) => (
  <div
    onClick={changeVisible}
    className={`burger${open ? " burger__active " : ""}`}
  >
    <span className="burger__item" />
  </div>
);

export default Burger;
