export interface BurgerProps {
  changeVisible: () => void;
  open: boolean;
}

export interface ICard {
  text: string;
  src: string;
  alt: string;
}

export interface CardProps {
  card: ICard;
}

export interface ArrowProps {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}