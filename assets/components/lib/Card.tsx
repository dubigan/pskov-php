import React, { ReactElement } from 'react';

interface ICardProps {
  children?: any;
  className?: string;
}

const CardHeader: React.FC<ICardProps> = ({ children, className }) => {
  return <div className={className ? className : 'card__header'}>{children}</div>;
};

const CardTitle: React.FC<ICardProps> = ({ children, className }) => {
  return <div className={className ? className : 'card__title'}>{children}</div>;
};

const CardBody: React.FC<ICardProps> = ({ children, className }) => {
  return <div className={className ? className : 'card__body'}>{children}</div>;
};

const CardFooter: React.FC<ICardProps> = ({ children, className }) => {
  return <div className={className ? className : 'card__footer'}>{children}</div>;
};

type ICard = React.FC<ICardProps> & {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

const Card: ICard = ({ children, className }) => {
  // let Body: typeof CardBody;
  // let Footer: typeof CardFooter;
  return (
    // {
    //   Header: CardHeader,
    //   Title: CardTitle,
    //   Body: CardBody,
    //   Footer: CardFooter
    // }
    <div className={className ? className : 'card'}>{children}</div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;

export default Card;
