import { useState } from "react";
import { useResize } from "../../hooks/useResize";

import Burger from "../Burger/Burger";
import NavigationList from "../NavigationList/NavigationList";
import SocialList from "../SocialList/SocialList";
import logo from "../../img/svg/logo.svg";

import "./Header.scss";
import "../../App.scss";
import Localization from "../Localization/Localization";

const Header = () => {
  const { isScreenXl } = useResize();

  const [openBurger, setOpenBurger] = useState<boolean>(false);

  const changeVisible = () => {
    setOpenBurger((prev) => !prev);
  };

  return (
    <header>
      <div
        className={`header-logo${isScreenXl ? " header-logo__desktop-bg" : ""}`}
      >
        <img className="header-logo__img" src={logo} alt="logo" />
      </div>
      <div className="wrapper header-menu">
        {!isScreenXl && (
          <Burger changeVisible={changeVisible} open={openBurger} />
        )}
        <SocialList />
        {isScreenXl && <NavigationList />}
        <Localization />
      </div>
    </header>
  );
};

export default Header;
