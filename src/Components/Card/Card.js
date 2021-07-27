import React from 'react';

import './Card.css';

export function Card({ liked, text, img, category }) {
  return (
    <div className="card__container">
      <div className="card">
        <div className="card__content">
          <img className="card__img" width={230} height={180} src={img} alt="ph" />
          <h4 className="card__title">{text}</h4>
          <p className="card__text">
            Added by <span className="text_green">Awwwards Team</span> in{' '}
            <span className="text_bold">{category}</span>
          </p>
        </div>
        <div className="likedBlock">
          <div className="likedBlock__total">
            <ul className="likedBlock__list">
              {liked
                ? liked.map((item) => (
                    <li>
                      <img width={25} src={item.avatar} />
                    </li>
                  ))
                : null}
            </ul>
            {liked ? <div className="likedBlock__amount">+{liked.length}</div> : null}
          </div>
          <svg
            className="likedBlock__button"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="gray">
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path>
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
