import instagram from "../img/svg/instagram.svg";
import whatsapp from "../img/svg/whatsapp.svg";
import mail from "../img/svg/mail.svg";

export const NAVIGATION_DATA = [
  {
    value: "Главная",
    dropDown: false,
    highlighted: true,
  },
  {
    value: "О Magnolia",
    dropDown: true,
  },
  {
    value: "Карта",
    dropDown: false,
  },
  {
    value: "Галерея",
    dropDown: true,
  },
  {
    value: "Партнеры",
    dropDown: false,
  },
  {
    value: "Контакты",
    dropDown: false,
  },
];

export const SOCIAL_DATA = [
  {
    src: instagram,
    alt: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    src: whatsapp,
    alt: "whatsapp",
    link: "https://www.whatsapp.com/",
  },
  {
    src: mail,
    alt: "mail",
    link: "https://mail.ru/",
  },
];
