import { SLANTED } from "../../constants/common";
import { ELocalozation } from "../../types/localization";
import "./Localization.scss";

const Localization = () => (
  <div className="localization">
    <span className="localization__active">{ELocalozation.RU}</span>
    <span>{SLANTED}</span>
    <span>{ELocalozation.EN}</span>
  </div>
);

export default Localization;
