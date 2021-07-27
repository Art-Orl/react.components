import React from 'react';

import { Card } from '../Card/Card';
import { cards } from '../../cardsContent';

import './CardsField.css';

export function CardsField() {
  return (
    <div className="cards__container">
      {cards.map((item) => (
        <Card
          name={item.name}
          text={item.text}
          img={item.img}
          category={item.category}
          liked={item.liked}
        />
      ))}
    </div>
  );
}
