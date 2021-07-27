import React from 'react';

import { LikedBlock } from '../LikedBlock/LikedBlock';

import './Card.css';

export function Card({ liked, text, img, category }) {
  return (
    <div className="card__container">
      <div className="card">
        <div className="card__content">
          <img className="card__img" src={img} alt="ph" />
          <h4 className="card__title">{text}</h4>
          <p className="card__text">
            Added by <span className="text_green">Awwwards Team</span> in{' '}
            <span className="text_bold">{category}</span>
          </p>
        </div>
        <LikedBlock liked={liked} />
      </div>
    </div>
  );
}
