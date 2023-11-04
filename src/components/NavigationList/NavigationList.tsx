import { NAVIGATION_DATA } from "../../constants/headerMenu";
import arrow from "../../img/svg/arrow.svg";
import "./NavigationList.scss";

const NavigationList = () => (
  <nav>
    <ul className="navigation-list">
      {NAVIGATION_DATA.map((item) => (
        <li className="navigation-list__item" key={item.value}>
          <a className="navigation-list__link" href="/">
            {item.value}
            {item.dropDown && (
              <img className="navigation-list__arrow" src={arrow} alt="arrow" />
            )}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationList;
