import { SOCIAL_DATA } from "../../constants/headerMenu";
import "./SocialList.scss";

const SocialList = () => (
  <ul className="social-list">
    {SOCIAL_DATA.map((item) => (
      <li className="social-list__item" key={item.alt}>
        <a
          className="social-list__link"
          href={item.link}
          target="_blank"
          rel="noreferrer"
        >
          <img src={item.src} alt={item.alt} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialList;
